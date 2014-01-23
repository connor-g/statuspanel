var Checkins = require('../views/checkins');
var Checkin = require('../models/checkin');
var config = require('../../config').foursquare;
var koa = require('koa');
var Panel = require('../views/panel');

var app = module.exports = koa();

app.use(function *(next) {
  var checkins = yield Checkin.recent(config.token, config.ids);

  this.component = Panel({
    name: 'foursquare',
    rows: 3,
    cols: 8,
    allowsResizing: 'NO',
    allowsScrolling: 'NO',
    children: Checkins({
      checkins: checkins
    })
  });
  
  yield* next;
});
