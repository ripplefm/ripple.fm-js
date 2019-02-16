#!/bin/bash
set -e

# Check formatting
npm run lint

if [ -n "$TRAVIS_TAG" ]; then
  release_version=`cat package.json | grep "version\": " | cut -d \" -f 4`

  # enforce package.json version to be equal to travis_tag
  if [[ "$TRAVIS_TAG" != "$release_version"* ]]; then
    echo "Branch tag ($TRAVIS_TAG) not equal to version defined in 'package.json' ($release_version)"
    echo "Terminating Build..."
    exit 1
  fi

  npm run build  
fi
