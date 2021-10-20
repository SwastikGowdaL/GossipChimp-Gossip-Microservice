require('dotenv').config();

module.exports = {
  //* env variable will be either dev or test
  ENV: process.env.ENV,

  //* port will be 3000
  PORT: process.env.PORT,

  //* db conn for gossipChimp and another db conn while testing
  GOSSIP_CHIMP: process.env.GOSSIP_CHIMP,
  GOSSIP_CHIMP_TEST: process.env.GOSSIP_CHIMP_TEST,

  //* auth key for requests
  AUTH_KEY: process.env.AUTH_KEY,
};
