const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const session = require('express-session')

app.use(
    session({
        secret:"kanban",
        resave:false,
        saveUninitialized:true,
    })
)

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
}) 