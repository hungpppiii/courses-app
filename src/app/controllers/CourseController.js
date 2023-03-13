const Course = require('../models/Course');

class CourseController {
    show(req, res, next) {
        Course.findOne({
            slug: req.params.slug,
        })
            .lean()
            .then((course) =>
                res.render('courses/show', {
                    course: course,
                }),
            )
            .catch(next);
    }

    create(req, res) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => {
                res.render('courses/edit', {
                    course: course,
                });
                console.log(course);
            })
            .catch((error) => {});
    }

    // PUT /course/:id
    update(req, res, next) {
        Course.updateOne(
            {
                _id: req.params.id,
            },
            req.body,
        )
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((error) => {});
    }

    // DELETE /course/:id
    delete(req, res, next) {
        Course.deleteOne({
            _id: req.params.id,
        })
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((error) => {});
    }
}

module.exports = new CourseController();
