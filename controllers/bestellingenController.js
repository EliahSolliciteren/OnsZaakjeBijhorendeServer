const { body } = require('express-validator')
const mongoose =require('mongoose')
const bestelling = require('../modules/bestelling')
const { findByIdAndUpdate, findOneAndUpdate } = require('../modules/gerecht')
const gerecht=require('../modules/gerecht')
const gerechtenController = require('./gerechtenController')
const { alleGerechten } = require('./gerechtenController')
module.exports={



create: (req,res,next)=> {
//console.log(req.body.naam)

const gerechtenArray=[]




    bestelling.create({

klant: req.body.klant,
datum: req.body.datum,

aantal: req.body.aantal,
notities: req.body.notities

}).then(resultaat=>{const deBestelling=resultaat
    req.body.naam.forEach(element=>{
        gerecht.findOne({naam:element.naam}).then(resultaat=>{bestelling.findByIdAndUpdate(deBestelling._id,{$push:{gerechten:resultaat._id}}).then(resultaat=>console.log(resultaat))})})}
        



/*.then(bestelling=>{ var bestelling2=bestelling;   req.body.gerechten.forEach((element=>{
 /*   gerecht.find({naam:element.naam}).then(gerecht2=>{
        const gerechtId=gerecht2[0]._id
        console.log(bestelling2._id)
        console.log(gerechtId)
        gerecht.findById(gerechtId).then(einde=>{console.log(einde)})
   bestelling.findByIdAndUpdate({_id:bestelling2._id},{$push: {'gerechten':gerechtId}})
    res.send('res?')
    
    })}))*/
    
    
    
    
    
    
    
    
    /*console.log(bestelling)
    for (const gerecht in req.body.gerechten){
gerecht.find({naam:gerecht.naam[0]}).then(resultaat=>console.log(resultaat))}
    findByIdAndUpdate(bestelling._id)*/
    
    ,)},
alleBestellingen: (req,res,next)=> {

bestelling.find().then(bestellingen=>{res.json(bestellingen)})






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




































