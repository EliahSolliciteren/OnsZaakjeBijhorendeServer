const { body } = require('express-validator')
const mongoose =require('mongoose')
const bestelling = require('../modules/bestelling')
const { findByIdAndUpdate, findOneAndUpdate } = require('../modules/gerecht')
const gerecht=require('../modules/gerecht')
const gerechtenController = require('./gerechtenController')
const { alleGerechten } = require('./gerechtenController')
module.exports={





    
    
    
    

create:(req,res,next)=>{
console.log(req.body)
const gerechten= req.body.bestelling.map(gerecht=>mongoose.Types.ObjectId(gerecht._id))
//console.log(gerechten)
//console.log(req.body.klant)
const klant= mongoose.Types.ObjectId(req.body.klant._id)
//console.log(req.body.bestelling)
bestelling.create({
gerechten:gerechten,
datum:req.body.datum,
klant:klant,
totaal:req.body.totaal,
adres:req.body.adres
}).exec()

}   , 
alleBestellingen: (req,res,next)=> {

bestelling.find().then(bestellingen=>{res.json(bestellingen); console.log(bestellingen)})






},

JSONerror: (error, req, res, next) => {

if (error){
    let errorObject={
        status: 500/*httpStatus.INTERNAL_SERVER_ERROR*/,
        message: error.message
    }
        
        res.json(errorObject);
    }  
 } }




































