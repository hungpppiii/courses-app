const express = require("express");
const path = require("path")
const morgan = require("morgan");
const {
  engine
} = require("express-handlebars");
const app = express();
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine("hbs", engine({
  extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resources/views'))

const port = 3000;
app.get("/", (req, res) => res.render('home'));
app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);