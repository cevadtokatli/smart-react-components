#!/bin/bash

# Color
RED='\033[0;31m'
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

# Returns the version value from the package.json increasing it by 1.
function getVersion() {
  local currentVersion=$(grep -o '"version": "[^"]*' package.json | grep -o '[^"]*$')
  local currentVersionNumber=$(echo $currentVersion | grep -o '[0-9]*$')
  local newVersionNumber=$((currentVersionNumber + 1))
  local newVersion=$(echo $currentVersion | sed "s/[0-9]*$/$newVersionNumber/g")

  echo $newVersion
}

# Updates the given version in the package.json
function updateVersion() {
  # params
  local key=$1
  local value=$2

  local currentAttr=$(grep -o "\"$key\": \"[^\"\^]*\"," package.json)
  local currentValue=$(echo $currentAttr | grep -o '[^"]*",$' | grep -o '[^",]*')
  local newAttr=${currentAttr/$currentValue/$value}
  sed -i '' "s#$currentAttr#$newAttr#g" package.json

  if grep -q "\"$key\": \"\^[^\"]*\"," package.json ; then
    local peerCurrentAttr=$(grep -o "\"$key\": \"\^[^\"]*\"," package.json)
    local peerCurrentValue=$(echo $peerCurrentAttr | grep -o '[^"\^]*",$' | grep -o '[^",]*')
    local peerNewAttr=${peerCurrentAttr/$peerCurrentValue/$value}
    sed -i '' "s#$peerCurrentAttr#$peerNewAttr#g" package.json
  fi
}

# Updates the released module's dependant modules' package.json to use the current version.
function updateModuleDependentsPackageJson() {
  # params
  local module=$1
  local version=$2

  cd ../playground
  updateVersion "@smart-react-components/$module" $version

  if [ $module = "core" ] ; then
    cd ../transition
    updateVersion "@smart-react-components/$module" $version
    cd ../router
    updateVersion "@smart-react-components/$module" $version
  fi

  if [ $module != "ui" ] ; then
    cd ../ui
    updateVersion "@smart-react-components/$module" $version
  fi

  cd "../$module"
}

function release() {
  # params
  local module=$1

  echo -e "$YELLOW***** Releasing $module *****$NC"
  cd $module

  rm -rf node_modules yarn.lock
  yarn install

  yarn lint

  if [ $? -ne '0' ] ; then
    echo -e "$RED***** There are some linting issues in your changes *****$NC"
    exit 1
  fi

  local version=$(getVersion)
  updateVersion "version" $version

  yarn build

  if [ $? -ne '0' ] ; then
    echo -e "$RED***** The build operatin has been failed *****$NC"
    exit 1
  fi

  updateModuleDependentsPackageJson $module $version

  git commit -a -m "Release module \"$module\" to \"$version\""
  git push -u origin

  cd lib && yarn publish

  cd ../..
  echo -e "$GREEN***** $module has been released *****$NC"
}

function main() {
  # params
  local module=$1

  cd ..

  if local output="$(git status --porcelain)" && [ -n "$output" ]; then
    echo -e "$RED***** Git has uncommited changes, please commit all your changes before release *****$NC"
    exit 1
  fi

  release $module

  if [ $module = "core" ] ; then
    release "transition"
    release "router"
  fi

  if [ $module != "ui" ] ; then
    release "ui"
  fi

  cd ./playground
  rm -rf node_modules yarn.lock
  yarn install
}

main $1
