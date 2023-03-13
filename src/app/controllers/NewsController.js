class NewsController {
    // [GET] /
    index(req, res) {
        res.render('news');
    }
    // [GET] /:slug
    shows(req, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController();
