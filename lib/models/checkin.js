var moment = require('moment');
var request = require('co-request');

moment.lang('en', {
  relativeTime: {
    past: '%s',
    s: '%ds',
    m: '%dm',
    mm: '%dm',
    h: '%dh',
    hh: '%dh',
    d: '%dd',
    dd: '%dd',
    M: '%dmo',
    MM: '%dmo',
    y: '%dy',
    yy: '%dy',
  }
});

var Checkin = module.exports = function(id, user, venue, createdAt) {
  this.id = id;
  this.user = user;
  this.venue = venue;
  this.createdAt = createdAt;
};

Checkin.prototype.image = function() {
  return this.user.photo;
};

Checkin.prototype.name = function() {
  return this.venue.name;
};

Checkin.prototype.time = function() {
  return moment(new Date(this.createdAt * 1000)).fromNow();
};

Checkin.recent = function *(oauthToken, idSet) {
  var response = yield request({
    url: 'https://api.foursquare.com/v2/checkins/recent',
    qs: {
      'oauth_token': oauthToken
    },
    json: true
  });

  var checkins = response.body.response.recent.filter(function(data) {
    return idSet.has(data.user.id);
  }).map(function(data) {
    return new Checkin(data.id, data.user, data.venue, data.createdAt);
  });

  return checkins;
};
