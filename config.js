module.exports = {
  port: process.env.PORT || 3000,
  foursquare: {
    token: process.env.FOURSQUARE_TOKEN,
    ids: process.env.FOURSQUARE_IDS.split(',').reduce(function(set, id) {
      set.add(id);
      return set;
    }, new Set())
  }
};