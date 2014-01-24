var checkins = require('../views/checkins');
var Checkin = require('../models/checkin');
var config = require('../../config').foursquare;
var koa = require('koa');
var panel = require('../views/panel');

var app = module.exports = koa();

app.use(function *(next) {
  var data = yield Checkin.recent(config.token, config.ids);

  this.component = panel({
    name: 'foursquare',
    rows: 3,
    cols: 8,
    allowsResizing: 'NO',
    allowsScrolling: 'NO',
    children: checkins({
      checkins: data
    })
  });
  
  return yield* next;
});
