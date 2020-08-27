const authtentification = (req,res,next) =>{
    if (req.session.user){
        next()
    }else{
        req.app.locals.errors = `Login dulu`
        res.redirect('/login')
    }
}

module.exports = authtentification