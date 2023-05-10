const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const set = await axios.get('http://www.karvina.cz/opendata.json');
    res.render('index', {json: set.data.informace});
});

app.get('/adresa', function(req, res) {
  res.render("adresa");
});

app.get('/about', function(req, res) {
  res.render("about");
});

app.listen(port);
