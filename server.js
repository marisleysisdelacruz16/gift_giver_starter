const express = require("express")
const morgan = require("morgan")
const giftRouter = require("./routes/gift-exchange")

const app = express()

app.use(express.json())
app.use("/gift-exchange", giftRouter)

app.use(morgan("tiny"))

app.get("/gift-exchange", async(req, res, next) => {
  res.status(names)
})

const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})