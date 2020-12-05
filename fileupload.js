
const express = require('express');
//const bodyParser= require('body -parser');
const multer = require('multer');

const app = express();
 app.use(express.static('public')); 

 const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, originalname);
}
});

const upload = multer({ storage });
//single file upload
//app.post('/upload', upload.single('myFile'), (req, res) => {
  //return res.json({ status: 'file has been uploaded..!'});
//});
//multiple file uploadS
app.post('/upload', upload.array('myFile'), (req, res) => {
  return res.json({ message:req.files,uploaded: req.files.length });
});

app.listen(3001, () => console.log('Server started on port 3001'));