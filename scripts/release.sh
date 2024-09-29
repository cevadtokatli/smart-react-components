#!/bin/bash

# Color
RED='\033[0;31m'
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

function release() {
  # params
  local module=$1

  echo -e "$YELLOW***** Releasing $module *****$NC"
  cd $module

  rm -rf node_modules package-lock.json yarn.lock
  npm install

  npm run lint

  if [ $? -ne '0' ] ; then
    echo -e "$RED***** There are some linting issues in your changes *****$NC"
    exit 1
  fi

  npm run build

  if [ $? -ne '0' ] ; then
    echo -e "$RED***** The build operation has been failed *****$NC"
    exit 1
  fi

  cd lib && npm publish

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
  rm -rf node_modules package-lock.json yarn.lock
  npm install
}

main $1
