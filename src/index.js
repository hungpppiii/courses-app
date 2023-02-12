const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {
  engine
} = require('express-handlebars');
const app = express();
const route = require('./routes/index');
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

const port = 3000;

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`),
);

const abc = {
  a: 1,
  b: 2,
  c: 3,
  d: 'dd',
  dfsdj: 'fdsklf',
  "dkjsl": 'dsfkjkl',
  'fdskj': "fsldkfjlk"
};