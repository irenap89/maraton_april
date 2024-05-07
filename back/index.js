const express = require('express')
const app = express();
var cors = require('cors');
const fileupload = require("express-fileupload");
const send_to_api = require('./send_to_api');

app.use(cors());
app.use(fileupload());

app.use('/no_bg_img' , express.static('no_bg_img'));
app.use('/upload_img', express.static('upload_img'));

const port = 5000

app.post('/upload_file', (req, res) => {
  console.log(req.files);
  let fileName = req.files.file.name;
  let file_path = __dirname + '/upload_img/' + fileName;

  req.files.file.mv(file_path , function(err) {
      if(err){
        console.log(err);
      }else{
        console.log("uploaded");
        send_to_api(file_path,fileName );

        res.send(fileName);
      }
  });  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})