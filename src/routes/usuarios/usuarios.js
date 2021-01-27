const { Router } = require("express")
const router = Router()

router.post("/hola", (req, res) => {
  res.send("hola mundo")
})

module.exports = router

