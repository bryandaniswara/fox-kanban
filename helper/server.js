
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'rizkieawanj@gmail.com',
        pass:process.env.PASSWORD,
    }
})

// transporter.sendMail(mailOptions,function(err,data){
//     if(err)console.log(err)
//     else console.log('sent')
// })

module.exports = transporter