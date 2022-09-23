const gerechtenController = require("../controllers/gerechtenController")
const klantenController = require("../controllers/klantenController")

const router = require("express").Router(),
bestellingenController = require("../controllers/bestellingenController")




router.post('/create', /*klantenController.token,*/ bestellingenController.create)
router.get('/alleBestellingen',bestellingenController.alleBestellingen)
router.use(bestellingenController.JSONerror)










module.exports=router