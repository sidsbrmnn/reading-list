const compression = require("compression");
const helmet = require("helmet");
const logger = require("morgan");

module.exports = function(server) {
  server.use(compression());
  server.use(helmet());
  server.use(logger("dev"));
};
