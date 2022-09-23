const mongoose = require('mongoose')



gerechtenSchema = mongoose.Schema({


naam: {

type:'String'


},

prijs:{type:'Number'}

,
categorie: {

type:'String',
enum: ['drank', 'voorgerecht', 'nagerecht', 'vlees', 'vis', 'pasta', 'pizza'],
default: 'drank'

}, 

aantal: {

type:Number,
default: 0

}











})
module.exports= mongoose.model("gerecht",gerechtenSchema)