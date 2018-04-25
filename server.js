const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
  name: 'Even',
  likes: [
    'Games',
    'Tv',
    'Programming'
  ]
})
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Some error here',
    errorMessage: 'An error occurred',
    errorCode: '404'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});