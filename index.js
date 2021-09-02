console.log('hello node');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h3>have you ever seen a man say goodbye to a pair of shoes before?</h3> <a href = "https://github.com/JustinK72/hello-heroku"> thrillhouse </a> ')
});

app.get('/about', function (req, res) {
    res.sendFile('/README.md', { root: _dirname });
});

app.listen(process.env.PORT || 3000)