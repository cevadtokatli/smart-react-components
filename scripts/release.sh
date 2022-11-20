#!/bin/bash

# Color
RED='\033[0;31m'
NC='\033[0m'

# Returns the version value from the package.json increasing it by 1.
function getVersion() {
  local currentVersion=$(grep -o '"version": "[^"]*' package.json | grep -o '[^"]*$')
  local currentVersionNumber=$(echo $currentVersion | grep -o '[0-9]*$')
  local newVersionNumber=$((currentVersionNumber + 1))
  local newVersion=$(echo $currentVersion | sed "s/[0-9]*$/$newVersionNumber/g")

  echo $newVersion
}

# Updated the given version in the package.json
function updateVersion() {
  # params
  local key=$1
  local value=$2

  local currentAttr=$(grep -o "\"$key\": \"[^\"]*" package.json | grep -o '[^"]*$')

  sed -i '' "s/$currentAttr/$value/g" package.json
}

function release() {
  # params
  local module=$1

  if local output="$(git status --porcelain)" && [ -n "$output" ]; then
    echo -e "$RED***** Git has uncommited changes, please commit all your changes before release *****$NC"
    exit 1
  fi

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

  git commit -A -m "Release module \"$module\""
  git push -u origin

  cd lib && yarn publish
}

release $1
