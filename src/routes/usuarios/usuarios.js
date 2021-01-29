const { Router } = require("express");
const router = Router();
const pool=require('../../database');

router.get("/add", (req, res) => {
  res.render('add');
})

router.post("/add", async (req,res)=>{
  const {nombre,correo,password,edad,foto}= req.body;
  console.log(req.body);
  const newLink={
    nombre,
    correo,
    password,
    edad,
    foto
  };
 await pool.query('INSERT INTO usuarios set ?',[newLink]);
  res.send("Usuario creado exitosamente");
});

module.exports = router

