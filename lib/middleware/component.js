var React = require('react');

var render = function(component) {
  return function(callback) {
    return React.renderComponentToString(component, function(html) {
      return callback(null, html);
    });
  };
};

module.exports = function component() {
  return function *component(next) {
    if (this.component) {
      this.body = yield render(this.component);
    }
    return yield* next;
  };
};