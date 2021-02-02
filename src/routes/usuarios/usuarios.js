const { Router } = require("express");
const router = Router();
const {registrar,login,logout}=require('../../controller/usuarios/usuarioController');
const {isLoggedIn}=require('../../controller/usuarios/auth');

router.get("/registro", (req, res) => {
  res.render('add');
})

router.post("/registro", registrar);

router.get("/perfil",isLoggedIn,(req,res)=>{
  res.render("perfil");
});

router.get("/login",(req,res)=>{
  res.render('login');
});

router.post("/login", login);

router.get("/logout",logout);

module.exports = router

