'use strict';

var see = require('ses-see');
var eat = require('ses-eat');
var sleep = require('ses-sleep');

exports.initPages = function (pagesApp, express, apiServerInfo) {
  see.initPages(pagesApp, express, apiServerInfo);
  eat.initPages(pagesApp, express, apiServerInfo);
  sleep.initPages(pagesApp, express, apiServerInfo);
};

exports.postInitPages = function (pagesApp, pagesServer, express) {
  see.postInitPages(pagesApp, pagesServer, express);
  eat.postInitPages(pagesApp, pagesServer, express);
  sleep.postInitPages(pagesApp, pagesServer, express);
};

exports.initApi = function (apiApp, restify) {
  see.initApi(apiApp, restify);
  eat.initApi(apiApp, restify);
  sleep.initApi(apiApp, restify);
};

exports.postInitApi = function (apiApp, apiServer, restify) {
  see.postInitApi(apiApp, apiServer, restify);
  eat.postInitApi(apiApp, apiServer, restify);
  sleep.postInitApi(apiApp, apiServer, restify);
};
