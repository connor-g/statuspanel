module.exports = function authenticate() {
  return function *authenticate(next) {
    try {
      return yield *next;
    } catch(err) {
      if (err.status === 401) {
        this.set('WWW-Authenticate', 'Basic');
      }
      throw err;
    }
  };
};