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
aantal:[{

type: Number


}],

datum: {

    type: 'Date'

},

notities: [String]
,

betaald: {

type: Boolean,

}

},

{


timestamps: true


}






)

module.exports= mongoose.model("bestelling",bestellingenSchema)