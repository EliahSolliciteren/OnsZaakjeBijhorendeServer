var express = require('express')
var app=express()
require('dotenv').config({path:'./process.env'})
app.listen(process.env.PORT||3001 , function () { console.log('express running at port 3001')})
router=require('./routes/indexRouter.js')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
var cors = require('cors')
app.use(cors())  
    expressValidator = require("express-validator")
    const methodOverride = require("method-override")
    app.use(methodOverride("_method", {methods: ["POST", "GET"]}));
    app.set("view engine", "pug")

    app.use(express.static('public'))

const expressSession = require("express-session"),
cookieParser = require("cookie-parser")
var flash = require("connect-flash");
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(expressSession({
secret:  process.env.SESSION_SECRET,
rolling: true,
cookie: {maxAge: 400000000,
    secure:false
  
},
resave: false,
saveUninitialized: false
}));
app.use(flash())



//const passportLocalMongoose = require('passport-local-mongoose');
//passport.use(new LocalStrategy(bezoeker.authenticate()));

const MongoDB = require("mongodb").MongoClient,
dbURL = "mongodb://localhost:27017",
dbName = 'mijnZaak'
MongoDB.connect(dbURL, (error, client)=> {
autoIndex:true;
useCreateIndex:true
if (error) throw error;
let db = client.db(dbName);
})

const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/mijnZaak",
{useNewUrlParser: true,})
const db = mongoose.connection;
db.once("open", () => {
console.log("Successfully connected to MongoDB using Mongoose")
})
const passport = require("passport")
app.use(passport.initialize())
app.use(passport.session())
const klant = require("./modules/klant")
passport.use(klant.createStrategy())
passport.serializeUser(klant.serializeUser())
passport.deserializeUser(klant.deserializeUser())
const passportLocalMongoose = require('passport-local-mongoose');

app.use((req, res, next) => {
    
    
    res.locals.flash = req.flash();
    res.locals.logIn = req.isAuthenticated();
    res.locals.user = req.user;
    
    
next();
})





app.use("/",router)
