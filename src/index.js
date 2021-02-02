const express = require("express")
const app = express()
const cors = require("cors")
const path=require('path');
const session=require('express-session');
var flash = require('connect-flash');
const passport=require('passport');
// settings

app.set('port', process.env.PORT || 4000)
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
require('./controller/usuarios/passport');
// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(session({
    secret: 'myblog',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//variables globales
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});
// routes

app.use('/usuarios',require("./routes/usuarios/usuarios"));

// ********************************************* 


app.listen(app.get('port'), () => {
    console.log("conectado al puerto", app.get('port'))
})

