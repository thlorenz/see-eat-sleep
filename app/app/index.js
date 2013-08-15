'use strict';

var see = require('ses-see');

exports.initPages = function (pagesApp, express, apiServerInfo) {
  see.initPages(pagesApp, express, apiServerInfo);
};

exports.postInitPages = function (pagesApp, pagesServer, express) {
  see.postInitPages(pagesApp, pagesServer, express);
};

exports.initApi = function (apiApp, restify) {
  see.initApi(apiApp, restify);
};

exports.postInitApi = function (apiApp, apiServer, restify) {
  see.postInitApi(apiApp, apiServer, restify);
};
