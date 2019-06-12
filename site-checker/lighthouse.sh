#!/bin/sh
value=$(cat siteurl.txt)

echo "testing with url: $value"

url="$value/konferenz/"

npm run lh -- $value
