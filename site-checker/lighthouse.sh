#!/bin/sh
value=$(cat siteurl.txt)

echo "testing with url: $value"

npm run lh -- $value
