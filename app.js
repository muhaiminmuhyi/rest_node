const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoute = require('./src/route/route');
app.use('/', appRoute);

app.listen(port, () => {
    console.log(`rest_node listening at http://localhost:${port}`)
});