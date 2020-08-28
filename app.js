require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const session = require('express-session')
const authentification = require('./middleware/authentification')

// app.use(
//     session({
//         secret: "kanban",
//         resave: false,
//         saveUninitialized: true,
//     })
// )

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// app.use(authentification)

app.use(session({
    secret: 'kanban',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
app.use(routes);


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
}) 