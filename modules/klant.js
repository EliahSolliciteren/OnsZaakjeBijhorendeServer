const mongoose = require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')


klantenSchema = mongoose.Schema({


voornaam:{
type:String
},
familienaam:{
type:String

},

email:{

type:String

},

telefoonnummer:{

type:String


},

gemeente:{

type:String


},

straat:{

type:String



},

huisnummer:{


type: Number

},

token:{

type:String



}














})
klantenSchema.plugin(passportLocalMongoose, {
    usernameField:"email"


})




module.exports=mongoose.model("klant",klantenSchema)