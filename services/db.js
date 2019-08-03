const { connect } = require("mongoose");

module.exports = function() {
  connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useFindAndModify: false }
  ).then(() => console.log("Connected to MongoDB"));
};
