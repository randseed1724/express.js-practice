const express = require('express');

// Express server handling requests and responses
const app = express();
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// our first Route:

app.get('/', (req, res, next) => {
  // send views/index.ejs for displaying in the browser
  res.render('index');
});

app.get('/press-library', (req, res, next) => {
  // send views/index.ejs for displaying in the browser
  res.render('press-library');
});

app.get('/gallery', (req, res, next) => {
  // send views/index.ejs for displaying in the browser
  res.render('gallery');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
