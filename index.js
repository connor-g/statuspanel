var compress = require('koa-compress');
var koa = require('koa');
var logger = require('koa-logger');
var responseTime = require('koa-response-time');

var app = koa();

app.use(responseTime());
app.use(logger());
app.use(compress());

app.listen(3000);
