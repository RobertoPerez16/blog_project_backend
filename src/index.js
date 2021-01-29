const express = require("express")
const app = express()
const cors = require("cors")
const path=require('path');
// settings

app.set('port', process.env.PORT || 4000)
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes

app.use('/usuarios',require("./routes/usuarios/usuarios"));

// ********************************************* 


app.listen(app.get('port'), () => {
    console.log("conectado al puerto", app.get('port'))
})

