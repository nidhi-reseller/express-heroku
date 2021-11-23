const express = require('express');
const app = express();

app.use(express.json());

app.post('*', (req, res) => {
  res.json(req.body);
});
const server = await app.listen(process.env.PORT || 3000);
