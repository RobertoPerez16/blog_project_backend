
const pool=require('../../database');
const passport=require('passport');

const registrar= passport.authenticate('local.singup',{
successRedirect:'/usuarios/perfil',
failureRedirect:'/usuarios/registro',
failureFlash:true

});

const login = (req,res,next)=>{ 
passport.authenticate('local.singin',{
successRedirect:'/usuarios/perfil',
failureRedirect:'/usuarios/login',
failureFlash:true

})(req,res,next);
};

module.exports ={
registrar,
login
}