const router = require("express").Router(),
gerechtenController = require("../controllers/gerechtenController")



router.post('/create', gerechtenController.create)
router.get('/allegerechten', gerechtenController.alleGerechten)
router.use(gerechtenController.JSONerror)








module.exports=router