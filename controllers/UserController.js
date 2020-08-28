const { User } = require('../models')
const bcrypt = require('bcryptjs')
const transporter = require('../helper/server')
const verificationCode = require('crypto-random-string')

class Controller {
    static registerForm(req, res) {
        let errors = req.app.locals.errors
        delete req.app.locals.errors
        res.render('user/registerForm',{errors})
    }
    static registerPost(req, res) {
        let dataUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            code: verificationCode({ length: 4 })
        }
        let mail = {
            from: 'fox.kanban@gmail.com',
            to: `${req.body.email}`,
            subject: "Thank you for joining Fox-Kanban",
            text: `this is your verification code ${dataUser.code}`
        }
        transporter.sendMail(mail, function (err, data) {
            if (err) console.log(err)
            else console.log(`sent`)
        })
        
        res.render('user/verification', { dataUser })
    }
    static verification(req, res) {
        let data = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        let code = req.body.code
        let verification = req.body.verCode
        // console.log(code)
        // console.log(verificationCode)

        if (verification === code) {
            // console.log('masuk')
            User.create(data)
                .then(data => {
                    res.redirect('/login')
                })
                .catch(err => {
                    req.app.locals.errors = `username sudah ada`
                    res.redirect('/register')
                })
        } else {
            res.send(err)
        }
    }
    static loginForm(req, res) {
        let errors = req.app.locals.errors
        delete req.app.locals.errors
        res.render('user/loginForm', { errors })
    }
    static loginPost(req, res) {
        let options = { where: { username: req.body.username } }
        User.findOne(options)
            .then(data => {
                if (data) {
                    console.log(data)
                    console.log(data.password)
                    console.log(req.body.password)
                    let flag = bcrypt.compareSync(req.body.password, data.password)
                    console.log(flag)
                    if (flag) {
                        console.log('aa')
                        console.log(data.id,'data.id')
                        req.session.userId = data.id
                        res.redirect('/task')
                    } else {
                        // console.log('b')
                        req.app.locals.errors = `Username / Password salah`
                        res.redirect('/login')
                    }
                } else {
                    // console.log('a')
                    req.app.locals.errors = `Username / Password salah`
                    res.redirect('/login')
                }
             
            })
            .catch(err => {
                res.send(err)
            })
    }
    static setting(req, res) {
        User.findByPk(req.params.id)
            .then(data => {
                res.render('user/edit', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static settingPost(req, res) {
        let options = { where: { id: req.params.id },individualHooks:true }
        let updated = {
            username: req.body.username,
            password: req.body.password
        }
        User.update(updated, options)
            .then(data => {
                res.redirect('/task')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static logout(req, res) {
        req.session.destroy(function (err) {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/login')
            }
        })
    }
}

module.exports = Controller