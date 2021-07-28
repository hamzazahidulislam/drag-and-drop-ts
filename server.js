const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/app.css',function(req,res){
  res.sendFile(path.join(__dirname+'/app.css'));
  //__dirname : It will resolve to your project folder.
});

router.get('/dist/bundle.js',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/bundle.js'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static('dist'))

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');