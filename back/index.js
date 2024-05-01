const express = require('express')
const app = express();
var cors = require('cors');
const fileupload = require("express-fileupload");

app.use(cors());
app.use(fileupload());

const port = 5000

app.post('/upload_file', (req, res) => {
  console.log(req.body);
  res.send('sdfsdfg')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})