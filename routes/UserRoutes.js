const user = require('express').Router()
const Controller = require('../controllers/UserController')
const authentification = require ('../middleware/authentification')
const authtentification = require('../middleware/authentification')

// register
user.get('/register',Controller.registerForm)
user.post('/register',Controller.registerPost)
user.post('/verification',Controller.verification)

// login
user.get('/login',Controller.loginForm)
user.post('/login',Controller.loginPost)

// middleware
user.use(authtentification)

// edit
user.get('/setting',Controller.setting)
user.post('/setting',Controller.settingPost)

//logout
user.get('/logout',Controller.logout)

module.exports = user