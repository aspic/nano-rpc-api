#/bin/bash
# TODO: fix
../node_modules/@openapitools/openapi-generator-cli/bin/openapi-generator generate -g typescript-fetch -i swagger.yml -o typescript-fetch-es6 -c config.json
cp ./package.json ./tsconfig.json typescript-fetch-es6
cd typescript-fetch-es6
npm install
npm run build
