const express = require('express');
const app = express();
const route = express.Router();

const reqFilter = require('./Middleware');
// app.use(reqFilter);  // Application level middleware.
route.use(reqFilter);   // Router level middleware.

app.get('/', (req, res) => {
    res.send('I am home page')
})

app.get('/users', (req, res) => {
    res.send('I am users page')
})

route.get('/about', (req, res) => {
    res.send('I am about page')
})

route.get('/contact', (req, res) => {
    res.send('I am contact page')
})

app.use('/',route);

app.listen(4545);