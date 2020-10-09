const mongoose = require('mongoose');

exports.connectMongo = function () {
    const MONGO_URI =
        process.env.MONGO_URI || 'mongodb://localhost/reading-list';

    return mongoose.connect(MONGO_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
