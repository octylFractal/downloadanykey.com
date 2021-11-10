#!/usr/bin/env sh

ipns_key=

# Set the key used to publish for testing
if [ "$1" = "--key" ]; then
  shift
  ipns_key="$1"
  shift
fi

# Echo and error ON!
set -ex

./node_modules/.bin/rollup -c

ipfs_key="$(ipfs add -rQ --pin=false --cid-version=1 ./build)"

if ! [ "$ipns_key" = "" ]; then
  ipfs name publish --offline --key="$ipns_key" /ipfs/"$ipfs_key"
fi
