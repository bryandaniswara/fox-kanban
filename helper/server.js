
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rizkieawanj@gmail.com',
        pass: 'onay3001',
    }
})

// transporter.sendMail(mailOptions,function(err,data){
//     if(err)console.log(err)
//     else console.log('sent')
// })

module.exports = transporter