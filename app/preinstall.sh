[ -d node_modules ] || mkdir node_modules

# core -- neede only to access util functions and customized browserify
( cd ../ses-core && npm install && npm dedupe )
[ -d ./node_modules/ses-core ] || ln -s ../../ses-core ./node_modules/ses-core

# see
( cd ../ses-see && npm install && npm dedupe )
[ -d ./node_modules/ses-see ] || ln -s ../../ses-see ./node_modules/ses-see

# eat
( cd ../ses-eat && npm install && npm dedupe )
[ -d ./node_modules/ses-eat ] || ln -s ../../ses-eat ./node_modules/ses-eat
