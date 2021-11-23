var express = require('express');

var app = express();

//app.use(express.json());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function(request, response){
   console.log(request.body)
   response.json(request.body);
});

app.listen(process.env.PORT);
