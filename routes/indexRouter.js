const express = require('express')
const router= require('express').Router()


klantenRouter=require("./klantenRouter.js")
koksRouter=require("./koksRouter.js")
gerechtenRouter=require("./gerechtenRouter.js")
bestellingenRouter=require("./bestellingenRouter.js")

router.use("/klant",klantenRouter)
router.use("/kok",koksRouter)
router.use("/gerecht",gerechtenRouter)
router.use('/bestelling',bestellingenRouter)


module.exports = router;