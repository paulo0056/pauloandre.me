#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:paulo00560/pauloandre.me.git master:gh-pages

cd -