#!/bin/sh
value=$(cat siteurl.txt)


url="$value/konferenz/"

echo "testing with url: $url"

npm run lh -- $url
