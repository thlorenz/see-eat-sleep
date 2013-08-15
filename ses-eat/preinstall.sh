[ -d node_modules ] || mkdir node_modules

# core
( cd ../ses-core && npm install && npm dedupe )
[ -d ./node_modules/ses-core ] || ln -s ../../ses-core ./node_modules/ses-core
