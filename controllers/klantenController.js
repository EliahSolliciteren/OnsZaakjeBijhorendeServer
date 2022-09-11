const mongoose =require('mongoose')
const passport = require("passport")
const passportLocalMongoose=require('passport-local-mongoose')
const { findByIdAndUpdate } = require('../modules/klant')
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
              klant.findByIdAndUpdate(gebruiker._id,{$set:{token:token}}).then((error,ok)=>{console.log(error||ok)})






            passport.authenticate('local', function(req,res,next){
            console.log('aangemeld') })(req,res,next)
                 
            
         
         
         
         .catch(error => {
             console.log(`Het is niet gelukt om het nieuwe klant op te slaan:${error.message}`);
             next(error);
             })
            }
         else {
             
             console.log(error)
             next();
            
         }})



        },

         aanmelden:(req,res,next)=>{console.log(req.body);passport.authenticate('local')(req,res,next)},

next:(req,res,next)=>{res.json('ok')}























    
}