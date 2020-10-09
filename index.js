require('dotenv').config();

const express = require('express');
const next = require('next');

const { connectMongo } = require('./services/mongo');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();

    await connectMongo();
    console.log('Connected to MongoDB');

    if (process.env.NODE_ENV === 'production') {
        require('./services/prod')(server);
    }
    require('./services/routes')(server);

    server.get('*', (req, res) => {
        handle(req, res);
    });

    const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
