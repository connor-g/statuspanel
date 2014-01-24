module.exports = {
  port: process.env.PORT || 3000,
  auth: {
    name: process.env.AUTH_NAME,
    pass: process.env.AUTH_PASS
  },
  foursquare: {
    token: process.env.FOURSQUARE_TOKEN,
    ids: process.env.FOURSQUARE_IDS.split(',').reduce(function(set, id) {
      set.add(id);
      return set;
    }, new Set())
  }
};