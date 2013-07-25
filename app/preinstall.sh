[ -d node_modules ] || mkdir node_modules

# bootstrap
( cd ../bootstrap && npm install && npm dedupe )
[ -d ./node_modules/ses-bootstrap ] || ln -s ../../bootstrap ./node_modules/ses-bootstrap

# core
( cd ../core && npm install && npm dedupe )
[ -d ./node_modules/ses-core ] || ln -s ../../core ./node_modules/ses-core

# see
( cd ../see && npm install && npm dedupe )
[ -d ./node_modules/ses-see ] || ln -s ../../see ./node_modules/ses-see

