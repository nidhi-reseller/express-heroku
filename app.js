var express = require('express');

var app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function(request, response){
   console.log({ answer: 42 })
   response.send(request.body);
});

app.listen(process.env.PORT);
