var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function(req, res){
   console.log(req.body)
   res.send(req.body);
});

app.listen(process.env.PORT);
