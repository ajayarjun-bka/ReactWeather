var express = require('express');

// create the app

var app = express();
const port = process.env.PORT || 5000;

app.use(function(req,res,next){
  if(req.heaeders['x-forwarded-proto']==='http'){
    next();
  }
  else{
    res.redirect('http://'+req.hostname+req.url);
  }
});

app.use(express.static('public'));

app.listen(port,function()
{
  console.log('listening on port' + port);
});
