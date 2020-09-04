#!/bin/bash
ZIP_NAME=function.zip

cd lambda || exit
zip -r ../$ZIP_NAME *.js node_modules
