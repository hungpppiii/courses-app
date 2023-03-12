const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const route = require('./routes/index');
const connect = require('./config/db');
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);

// use method override
app.use(methodOverride('_method'));

// use morgan to log HTTP request
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// config router
route(app);

// connect database
connect();

const port = 3000;

app.listen(port, () =>
    console.log(`app listening at http://localhost:${port}`),
);
