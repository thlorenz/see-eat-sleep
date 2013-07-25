[ -d node_modules ] || mkdir node_modules

( cd ../bootstrap && npm install && npm dedupe )

[ -d ./node_modules/ses-bootstrap ] || ln -s ../../bootstrap ./node_modules/ses-bootstrap
