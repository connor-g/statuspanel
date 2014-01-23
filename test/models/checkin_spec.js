var chai = require('chai');
var rewire = require('rewire');

chai.should();

describe('Checkin', function() {
  var Checkin;

  beforeEach(function() {
    Checkin = rewire('../../lib/models/checkin');
  });

  describe('.image', function() {
    it('should be defined', function() {
      var checkin = new Checkin();
      checkin.image.should.be.ok;
    });

    it('should return the user photo', function() {
      var image = 'image';
      var checkin = new Checkin(null, {
        photo: image
      }, null, null);
      checkin.image().should.equal(image);
    });
  });

  describe('.name', function() {
    it('should be defined', function() {
      var checkin = new Checkin();
      checkin.name.should.be.ok;
    });

    it('should return the venue name', function() {
      var name = 'name';
      var checkin = new Checkin(null, null, {
        name: name
      }, null);
      checkin.name().should.equal(name);
    });
  });

  describe('.time', function() {
    it('should be defined', function() {
      var checkin = new Checkin();
      checkin.time.should.be.ok;
    });

    var cases = [{
      name: 'seconds',
      offset: 0,
      suffix: 's'
    }, {
      name: 'minute',
      offset: 60,
      suffix: 'm'
    }, {
      name: 'minutes',
      offset: 60 * 2,
      suffix: 'm'
    }, {
      name: 'hour',
      offset: 60 * 60,
      suffix: 'h'
    }, {
      name: 'hours',
      offset: 60 * 60 * 2,
      suffix: 'h'
    }, {
      name: 'day',
      offset: 60 * 60 * 24,
      suffix: 'd'
    }, {
      name: 'days',
      offset: 60 * 60 * 24 * 2,
      suffix: 'd'
    }, {
      name: 'month',
      offset: 60 * 60 * 24 * 32,
      suffix: 'mo'
    }, {
      name: 'months',
      offset: 60 * 60 * 24 * 32 * 2,
      suffix: 'mo'
    }, {
      name: 'year',
      offset: 60 * 60 * 24 * 365,
      suffix: 'y'
    }, {
      name: 'years',
      offset: 60 * 60 * 24 * 365 * 2,
      suffix: 'y'
    }];

    cases.forEach(function(info) {
      it('should handle ' + info.name, function() {
        var createdAt = (Date.now() / 1000) - info.offset;
        var checkin = new Checkin(null, null, null, createdAt);
        checkin.time().should.match(new RegExp('\\d{1,2}' + info.suffix));
      });
    });
  });
});