const express = require('express');
const proxy = require('http-proxy-middleware');
const fallback = require('express-history-api-fallback')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));


app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') === 'https' || process.env.NODE_ENV !== 'production') {
        next()
    } else {
        res.redirect(`https://${req.header('host')}${req.url}`);
    }
});

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

app.listen(PORT, function() {
    console.log('Our app is running on http://localhost:' + PORT);
});