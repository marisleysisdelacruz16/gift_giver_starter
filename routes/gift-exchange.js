const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router()

router.get("/", async (req,res,next) => {
    try {
        const names = await GiftExchange.returnNames()
        res.json(names)
    }
    catch(err) {
    next(err)
    }
})

router.post("/pairs", async (req,res,next) => {
    try {
        const pairs = await GiftExchange.pairs()
        res.status(200).json(pairs)
    }
    catch(err) {
    next(err)
    }

})

router.post("/traditional", async (req,res,next) => {
    try {
        const traditional = await GiftExchange.traditional()
        res.status(200).json(traditional)
    }
    catch(err) {
    next(err)
    }

}) 

module.exports = router
