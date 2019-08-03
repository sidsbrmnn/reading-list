const { json, urlencoded } = require("body-parser");

module.exports = function(server) {
  server.use(json());
  server.use(urlencoded({ extended: false }));
  server.use("/api/books", require("../routes/books"));
};
