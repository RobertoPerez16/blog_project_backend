const express = require("express")
const app = express()
const cors = require("cors")

// settings

app.set('port', process.env.PORT || 4000)

// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes

app.use(require("./routes/usuarios/usuarios"))

// ********************************************* 

app.listen(app.get('port'), () => {
    console.log("conectado al puerto", app.get('port'))
})