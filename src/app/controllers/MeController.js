const Course = require('../models/Course');
const moment = require('moment');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}).sortable(req).lean(), Course.countDeleted({}).lean()])
            .then(([courses, deletedCount]) => {
                courses.forEach((course) => {
                    course.createdAt = moment(course.createdAt).format(
                        'DD-MM-YYYY',
                    );
                });
                res.render('me/stored-courses', {
                    courses: courses,
                    deletedCount,
                });
            })
            .catch(next);
    }

    // [GET] /me/deleted/courses
    deletedCourses(req, res, next) {
        Course.findDeleted({})
            .sortable(req)
            .lean()
            .then((courses) =>
                res.render('me/deleted-courses', {
                    courses: courses,
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();