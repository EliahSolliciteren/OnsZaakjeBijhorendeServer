const router = require("express").Router(),
klantenController = require("../controllers/klantenController")





router.post('/create', klantenController.create, klantenController.next)
router.post('/aanmelden', klantenController.aanmelden, klantenController.next)











module.exports=router;