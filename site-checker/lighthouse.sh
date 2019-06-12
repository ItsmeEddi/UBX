#!/bin/sh
value=`cat siteurl.txt`

npm run lh -- $value
