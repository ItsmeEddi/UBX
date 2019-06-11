#!/bin/sh

cd ./biotope-boilerplate && npm run build

cd ..

node generateFiles.js

cp -r ./biotope-boilerplate/dist/resources ./dist/konferenz/resources
cp -r ./biotope-boilerplate/dist/_config ./dist/konferenz/_config


