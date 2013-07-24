'use strict';

var core = require('ses-core');


core.devServer({
  build: { entry: require.resolve('./client') }
});
