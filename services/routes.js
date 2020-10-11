const bodyParser = require('body-parser');

module.exports = function (server) {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use('/api/books', require('../routes/books'));
};
