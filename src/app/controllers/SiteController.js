const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) =>
                res.render('home', {
                    courses: courses,
                    abc: 'no name',
                }),
            )
            .catch(next);
    }

    // [GET] /:slug
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SiteController();
