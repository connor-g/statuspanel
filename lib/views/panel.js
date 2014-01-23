var React = require('react');

module.exports = React.createClass({
  render: function() {
    var charSet = React.DOM.meta({
      charSet: 'UTF-8'
    });

    var title = React.DOM.title({
      children: this.props.name
    });

    var settings = React.DOM.meta({
      'application-name': this.props.name,
      'data-default-size': '' + this.props.cols + ',' + this.props.rows,
      'data-allows-resizing': this.props.allowsResizing,
      'data-allows-scrolling': this.props.allowsScrolling
    });

    var head = React.DOM.head({
      children: [
        charSet,
        title,
        settings
      ]
    });

    var body = React.DOM.body({
      children: this.props.children
    });

    return React.DOM.html({
      lang: 'en',
      children: [
        head,
        body
      ]
    });
  }
});
