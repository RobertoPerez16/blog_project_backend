const { Router } = require("express");
const router = Router();
const {registrar,login}=require('../../controller/usuarios/usuarioController');

router.get("/registro", (req, res) => {
  res.render('add');
})

router.post("/registro", registrar);

router.get("/perfil",(req,res)=>{
  res.render("perfil");
});

router.get("/login",(req,res)=>{
  res.render('login');
});

router.post("/login", login);

module.exports = router

