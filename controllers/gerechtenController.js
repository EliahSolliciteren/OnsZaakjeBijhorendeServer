const { body } = require('express-validator')
const mongoose =require('mongoose')
const gerecht = require('../modules/gerecht')

module.exports={


create: (req,res,next)=>{
console.log(req.body)
gerecht.create({
    naam:req.body.naam,
    prijs:req.body.prijs,

})

res.json({    status: 200
})





},



alleGerechten: (req,res,next)=>{

gerecht.find().then(gerechten=>{console.log(gerechten);res.json(gerechten)})





},
JSONerror: (error, req, res, next) => {
if (error){
    let errorObject={
        status: 500/*httpStatus.INTERNAL_SERVER_ERROR*/,
        message: error
    }
        
        res.json(errorObject);
    }  
}






























    
}