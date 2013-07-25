[ -d node_modules ] || mkdir node_modules

# bootstrap
( cd ../bootstrap && npm install && npm dedupe )
[ -d ./node_modules/ses-bootstrap ] || ln -s ../../bootstrap ./node_modules/ses-bootstrap

# see
( cd ../see && npm install && npm dedupe )
[ -d ./node_modules/ses-see ] || ln -s ../../see ./node_modules/ses-see

