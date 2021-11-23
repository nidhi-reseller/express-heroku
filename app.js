var express = require('express');

var app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function(req, res){
   console.log({aa:req.body})
   res.json({aa:req.body});
});

app.listen(process.env.PORT);
