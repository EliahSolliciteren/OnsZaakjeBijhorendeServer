const mongoose = require('mongoose')



bestellingenSchema = mongoose.Schema({

klant: {

type: mongoose.Schema.Types.ObjectId,
ref: 'klant'


},

gerechten:[{

    type: mongoose.Schema.Types.ObjectId,
    ref: 'gerecht'


}],


datum: {

    type: 'Date'

},



betaald: {

type: Boolean,

},
totaal:{

type:Number

},



adres:{

    gemeente:{

type:String
    },

    straat:{
type:String

    },

    huisnummer:{

        type:Number
    }



}},

{


timestamps: true


}






)

module.exports= mongoose.model("bestelling",bestellingenSchema)