const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const pool=require('../../database');
const helpers=require('../../lib/helpers');

passport.use('local.singin',new LocalStrategy({
usernameField:'correo',
passwordField:'password',
passReqToCallback:true

},async(req,correo,password,done)=>{
   const rows= await pool.query('SELECT * FROM usuarios WHERE correo=?',[correo]);
   
   if(rows.length>0){
    const user=rows[0];
   
    const validPassword= await helpers.matchPassword(password,user.password);
    console.log(validPassword);
    if(validPassword){
      
        done(null,user,req.flash('success','Bienvenido'+' '+ user.nombre));
    }else{
        done(null,false,req.flash('message','Contraseña Incorrecta'));
    }
   }else{
        return done(null,false,req.flash('message','El usuario no existe'));
   }
}));

passport.use('local.singup', new LocalStrategy({
 usernameField:'correo',
 passwordField:'password',
 passReqToCallback:true,
 

},async (req,correo,password,done)=>{
    const {nombre,edad,foto}=req.body;
    const newLink={
      nombre,
      correo,
      password,
      edad,
      foto
    };
    newLink.password=await helpers.encryptPassword(password);
    const result= await pool.query('INSERT INTO usuarios set ?',[newLink]);
    return done(null,newLink,req.flash('success','Bienvenido'+' '+nombre));
}));

passport.serializeUser((user,done)=>{
   done(null,user.correo);

});

passport.deserializeUser(async(correo,done)=>{
   const rows= await pool.query('SELECT * FROM usuarios WHERE correo=?',[correo]);
   done(null,rows[0]);
})