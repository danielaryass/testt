const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const menuController = require('./menuController')
const cors = require('cors');
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// set cors all allows
app.use(bodyParser.json())

app.post("/menus", menuController.createMenu);
app.get("/menus", menuController.getAllMenu);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})