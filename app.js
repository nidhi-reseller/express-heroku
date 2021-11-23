var express = require('express');

var app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function(req, res){
   console.log(req.body)
   res.send({test:1});
});

app.listen(process.env.PORT);
