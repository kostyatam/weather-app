const express = require('express');
const proxy = require('http-proxy-middleware');
const fallback = require('express-history-api-fallback')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(
    '/api',
    proxy({
        target: 'http://api.openweathermap.org/data/2.5/',
        pathRewrite: {
            '^/api' : '/',
        }
    })
);
app.use(
    fallback('index.html', {
        root: __dirname + '/build'
    })
);
app.listen(PORT);