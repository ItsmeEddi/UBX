#!/bin/sh
value=$(cat siteurl.txt)


url="$value/konferenz/"

echo "testing with url: $url"

./node_modules/.bin/lighthousebot --pwa=40 --perf=80 --seo=95 --a11y=100 --bp=90 $url
