// all 'expose-...' module expose global dependencies that where added via a script tag in the head so they can be properly required
// for more info see ./config/shims.js
module.exports = window.$;
