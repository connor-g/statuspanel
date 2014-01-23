var React = require('react');

module.exports = React.createClass({
  _renderColumn: function(size, children) {
    return React.DOM.div({
      className: 'col-' + size,
      children: children
    });
  },

  _renderCheckin: function(checkin) {
    var image = this._renderColumn(1, React.DOM.img({
      src: checkin.image()
    }));

    var name = this._renderColumn(6, React.DOM.h1({
      children: checkin.name()
    }));

    var time = this._renderColumn(1, React.DOM.h1({
      children: checkin.time()
    }));

    return React.DOM.div({
      key: checkin.id,
      className: 'row',
      children: [
        image,
        name,
        time
      ]
    });
  },

  render: function() {
    var checkins = this.props.checkins.map(this._renderCheckin);

    return React.DOM.div({
      className: 'foursquare',
      children: checkins
    });
  }
});
