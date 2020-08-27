const { User, Task, UserTask } = require('../models');

class TaskController {
    static list(req, res) {
        User.findByPk(req.session.user, {
            include: {
                model: Task,
                include: User
            }
        })
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                res.send(err);
            });
    }

    static add(req, res) {
        // render form
    }

    static create(req, res) {
        Task.create({ ...req.body })
            .then((task) => {
                return UserTask.create({
                    UserId: req.session.user,
                    TaskId: task.id
                })
            })
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                res.send(err);
            });
    }

    static detail(req, res) {
        Task.findByPk(req.params.id, {
            include: [User]
        })
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                res.send(err);
            });
    }

    static assign(req, res) {
        // render form
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
                res.send(result);
            }).catch((err) => {
                res.send(err);
            });
    }

    static edit(req, res) {
        Task.findByPk(req.params.id)
            .then((result) => {
                res.send(result);
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
                res.send(result);
            }).catch((err) => {
                res.send(err);
            });
    }

    static delete(req, res) {
        Task.destroy({ where: { id: req.params.id } })
            .then((result) => {
                res.send(result);
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
                res.send(result);
            }).catch((err) => {
                res.send(err);
            });
    }
}

module.exports = TaskController;