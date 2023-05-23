const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const route = require('./routes/index');
const connect = require('./config/db');
const passport = require('passport');
const bodyParser = require('body-parser');
require('dotenv').config({
    path: path.resolve(__dirname, '../.env'),
});
const config = require('./config');
var session = require('express-session');

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 24 * 60 * 60,
        },
    }),
);

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
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(passport.initialize());
app.use(passport.session());

// config router
route(app);

// connect database
connect();

app.listen(config.port, () =>
    console.log(`app listening at http://localhost:${config.port}`),
);
