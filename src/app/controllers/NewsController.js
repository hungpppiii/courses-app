class NewsController {
    index(req, res) {
        res.render('news');
    }

    shows(req, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController();
