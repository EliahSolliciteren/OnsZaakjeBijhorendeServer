const mongoose =require('mongoose')
const passport = require("passport")
const passportLocalMongoose=require('passport-local-mongoose')
const { findByIdAndUpdate, findOneAndUpdate, findOne } = require('../modules/klant')
const klant=require('../modules/klant')
var jwt = require('jsonwebtoken');

module.exports={




    create: (req, res, next) => {
console.log(req.body)

             const nieuweKlant = new klant({
            voornaam: req.body.voornaam,
            familienaam:req.body.familienaam,
            email:req.body.email,
            username:req.body.email,
            password:req.body.wachtwoord,
            telefoonnummer:req.body.telefoonnummer,
            gemeente:req.body.gemeente,
            straat: req.body.straat,
            huisnummer:req.body.huisnummer
             })
                
                
                
                
         klant.register(nieuweKlant, req.body.password, (error, gebruiker)=>{
         if (gebruiker){
console.log(gebruiker._id || 'geen id')
console.log(gebruiker.email || 'geen email')
id=gebruiker._id
email=gebruiker.email
            const token = jwt.sign(
                { id: id, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );

              console.log('token'+ token)
              // save user token
              klant.findByIdAndUpdate(gebruiker._id,{$set:{token:token}}).exec()






            passport.authenticate('local', function(req,res,next){
            console.log('aangemeld') })(req,res,next)
                 
            
         
         
         

            }
         else {
             
             console.log(error)
             next();
            
         }})



        },

         aanmelden:(req,res,next)=>{passport.authenticate('local')(req,res,next)},

next:(req,res,next)=>{
    const email=req.body.email
    
    klant.findOne({email:email}).then(klant=>{
        console.log(klant)
        
        const id=klant._id
        const email=klant.email
        const token = jwt.sign(
            { id: id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
          console.log(id) 
          res.locals.token=token
          res.locals.id=id
          console.log(token)}).then(()=>{console.log(res.locals.id, res.locals.token),
    klant.findByIdAndUpdate(res.locals.id,{$set:{token:res.locals.token}}).exec()}).then(()=>{klant.findById(res.locals.id).then(klant=>res.send(klant))})
},
    
token:(req,res,next)=>{
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"] || req.get('authorization')

  if (!token) {
    console.log('headers: '+JSON.stringify(req.headers))
    return console.log("Geen token");

  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
}





}




















    
