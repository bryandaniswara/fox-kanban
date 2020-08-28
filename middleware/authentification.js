const authtentification = (req,res,next) =>{
    if (req.session.id){
        next()
    }else{
        req.app.locals.errors = `Login dulu`
        res.redirect('/login')
    }
}

module.exports = authtentification