[ -d node_modules ] || mkdir node_modules

( cd ../core && npm install && npm dedupe )

[ -d ./node_modules/ses-core ] || ln -s ../../core ./node_modules/ses-core
