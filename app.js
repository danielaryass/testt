const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const menuController = require('./menuController')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.json())

app.post("/menus", menuController.createMenu);
app.get("/menus", menuController.getAllMenu);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})