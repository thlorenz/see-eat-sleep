[ -d node_modules ] || mkdir node_modules

# see
( cd ../see && npm install && npm dedupe )
[ -d ./node_modules/ses-see ] || ln -s ../../see ./node_modules/ses-see
