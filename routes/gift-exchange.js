const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router()

router.get("/", async (req,res,next) => {
    const names = await GiftExchange.returnNames()
    res.json(names)
})

router.post("/pairs", async (req,res,next) => {
    const pairs = await GiftExchange.pairs()
    res.status(200).json(pairs)

})

router.post("/traditional", async (req,res,next) => {
    const traditional = await GiftExchange.traditional()
    res.status(200).json(traditional)

}) 

module.exports = router
