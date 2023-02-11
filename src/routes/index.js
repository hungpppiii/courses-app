const newsRouter = require('./news');
const siteRouter = require('./site')

function route(app) {
    app.use("/news", newsRouter);
    app.get("/search", (req, res) => res.render('search'));
    app.use("/", siteRouter);
}

module.exports = route;