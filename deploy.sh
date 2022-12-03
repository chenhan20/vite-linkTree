# npm run build
# git rm -r --cached dist
# git subtree push --prefix dist origin gh-pages
# git add dist
# git commit -m 'update gh-pages'
# git subtree push --prefix dist origin gh-pages


# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/chenhan20/vite-linkTree.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -