const gerechtenController = require("../controllers/gerechtenController")

const router = require("express").Router(),
bestellingenController = require("../controllers/bestellingenController")




router.post('/create', bestellingenController.create)
router.get('/alleBestellingen',bestellingenController.alleBestellingen)
router.use(bestellingenController.JSONerror)










module.exports=router