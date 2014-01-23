var component = require('./lib/middleware/component');
var compress = require('koa-compress');
var config = require('./config');
var foursquare = require('./lib/controllers/foursquare');
var koa = require('koa');
var logger = require('koa-logger');
var mount = require('koa-mount');
var responseTime = require('koa-response-time');

var app = koa();

app.use(responseTime());
app.use(logger());
app.use(compress());
app.use(mount('/foursquare', foursquare));
app.use(component());

app.listen(config.port);
