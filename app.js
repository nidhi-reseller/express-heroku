var express = require('express');

var app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function(request, response){
  const { postData: { contents } = {} } = request;
  const { text, id } = JSON.parse(contents);
  console.log(text);
   response.send(text)
});

app.listen(process.env.PORT);
