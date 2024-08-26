const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ['suliman', 'ismail', 'desowar', 'anwar', 'seam', 'shohad', 'saroar'];

app.get('/', (req, res) => {
  res.send('hello world, suliman vassa')
});
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const name = users[userId]
  res.send({userId, name})
});
// post
app.post('/addUser', (req, res) => {
  const user = req.body;
  user.id = 45;
  res.send(user)
})

app.listen(4200, () => console.log('Listenting to port 4200'))