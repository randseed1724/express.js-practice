const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// Express server handling requests and responses
const app = express();
app.use(express.static('public'));
app.use(expressLayouts);

//change default layout file from views/layout.ejs
app.set('layout','layout/main-layout.ejs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// our first Route:
app.locals.tittle = "Express Views";

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

app.get('/counting-views', (req, res, next) => {
  res.render('counting-views');

});

const citiesList = ['Paris', 'Ho Chi Ming CIty', 'Madrid', 'Warsaw', 'Moscow' , 'Torono'];

app.get('/cities', (req, res, next) => {
  res.render(
    'cities',{
      cities: citiesList,
      name: 'Retiom Poelquim',
      age: 12,
    });
});

const foodList = ['Frijoles', 'Croquetas', 'Sopa de Mani', 'Jamaican Food', 'Saltena'].sort();


app.get('/foods', (req, res, next) => {
  res.render(
    'foods',{
      food: foodList,
      nameFood: "My favorite food",
    });
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
