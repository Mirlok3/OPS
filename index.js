const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
//app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render("index");
});

app.get('/data', async (req, res) => {
  const set = await axios.get('http://www.karvina.cz/opendata.json');

	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>');

  for (obj of set.data.informace) {
  	res.write('<div>');
  		res.write('<h3>');
	  		res.write(obj['název'].cs);
  		res.write('</h3>');
	  	res.write('<p>');
	  		res.write(obj['typ'][1]);
	  	res.write('<p>');
  	res.write('</div>');
  }

  console.log(set.data);
	res.end();
});

app.get('/adresa', function(req, res) {
  res.render("adresa");
});

app.get('/about', function(req, res) {
  res.render("about");
});


app.listen(port);

/*
app.get('/adress', function(req, res) {
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	const timeString = `${hours}:${minutes}:${seconds}`;
  	res.send(`The current time is ${timeString}`);
});*/