const Course = require('../models/Course');

class CourseController {
    // [GET] /course/:slug
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

    // [GET] /course/create
    create(req, res) {
        res.render('courses/create');
    }

    // [POST] /course/store
    store(req, res, next) {
        const formData = {
            ...req.body,
        };
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => {});
    }

    // [GET] /course/:id/edit
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

    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({
                    _id: req.params.id,
                },
                req.body,
            )
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((error) => {});
    }

    // [DELETE] /course/:id
    delete(req, res, next) {
        Course.delete({
                _id: req.params.id,
            })
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((error) => {});
    }

    // [DELETE] /course/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({
                _id: req.params.id,
            })
            .then(() => {
                res.redirect('/me/deleted/courses');
            })
            .catch((error) => {});
    }

    // [PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({
                _id: req.params.id,
            })
            .then(() => {
                res.redirect('/me/deleted/courses');
            })
            .catch((error) => {});
    }

    // [POST] /course/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete': {
                Course.delete({
                        _id: {
                            $in: req.body.courseIds,
                        },
                    })
                    .then(() => res.redirect('back'))
                    .catch((error) => {});
            }
            break;
        default:
            break;
        }
    }
}

module.exports = new CourseController();