const mongoose = require('mongoose')



gerechtenSchema = mongoose.Schema({


naam: {

type:'String'


},

prijs:{type:'Number'}













})
module.exports= mongoose.model("gerecht",gerechtenSchema)