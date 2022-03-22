#!/bin/bash
# This script is only relevant for the main repo not forks or templates.
cp -r ../docs/src/components/CodeOutputBlock src/components
cp -r ../docs/src/components/HTMLOutputBlock src/components
cp ../docs/src/components/Caption.* src/components
mkdir -p src/theme/
cp -r ../docs/src/theme/MDXComponents src/theme/
cp ../docs/yarn.lock .
cp ../docs/package.json .
cp -r ../docs/requirements.txt .
cp -r ../docs/docs/nb.ipynb docs/
