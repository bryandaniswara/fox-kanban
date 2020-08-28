const { User, Task, UserTask } = require('../models');

class TaskController {
    static list(req, res) {
        User.findByPk(req.session.userId, {
            include: {
                model: Task,
                include: User
            }
        })
            .then((result) => {
                res.render('index.ejs', {
                    result,
                    todo: result.Tasks.filter(el => el.status === 'todo'),
                    doing: result.Tasks.filter(el => el.status === 'doing'),
                    done: result.Tasks.filter(el => el.status === 'done')
                });
            }).catch((err) => {
                res.send(err);
            });
    }

    static add(req, res) {
        res.render('task/addTask');
    }

    static create(req, res) {
        Task.create({ ...req.body, status: 'todo' })
            .then((task) => {
                return UserTask.create({
                    UserId: req.session.userId,
                    TaskId: task.id
                })
            })
            .then((result) => {
                res.redirect('/task');
            }).catch((err) => {
                res.send(err);
            });
    }

    static assign(req, res) {
        res.render('task/assign', { id: req.params.id });
    }

    static assignPost(req, res) {
        User.findOne({ where: { username: req.body.username } })
            .then((user) => {
                return UserTask.create({
                    UserId: user.id,
                    TaskId: req.params.id
                })
            })
            .then((result) => {
                res.redirect('/task');
            }).catch((err) => {
                res.send(err);
            });
    }

    static edit(req, res) {
        Task.findByPk(req.params.id)
            .then((result) => {
                res.render('task/editTask', { result });
            }).catch((err) => {
                res.send(err);
            });
    }

    static update(req, res) {
        Task.update({ ...req.body }, {
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                res.redirect('/task');
            }).catch((err) => {
                res.send(err);
            });
    }

    static delete(req, res) {
        Task.destroy({ where: { id: req.params.id } })
            .then((result) => {
                res.redirect('/task');
            }).catch((err) => {
                res.send(err);
            });
    }

    static move(req, res) {
        Task.update({ status: req.params.status }, {
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                res.redirect('/task');
            }).catch((err) => {
                res.send(err);
            });
    }
}

module.exports = TaskController;