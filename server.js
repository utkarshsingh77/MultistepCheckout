const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')
const _ = require('underscore')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/7200', { useMongoClient: true});
mongoose.Promise = global.Promise;

var Order = mongoose.model('Order', {
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  state: String,
  zip: Number,
  phone: String,
  cc: Number,
  exp: String,
  cvv: Number,
  zip: Number
})

var test = new Order({
  name: 'test',
  email: 'test@test.com',
  password: 'test',
  line1: '1234 test ave.',
  line2: 'po BOX test', 
  state: 'test',
  zip: 1234,
  phone: '245-121-1212',
  cc: 3252354325,
  exp: '05/2020',
  cvv: 3542,
  zip: 80016
})

// Order.create(test)
// .then(() => {
//   console.log('created')
// })

let obj = {};

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'build')))
app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res) => {
  console.log('requested')
})

app.post('/form1', (req, res) => {
  _.extend(obj, req.body);
  let instance = new Order(obj);
  Order.create(instance)
  .then(() => {
    res.end()
  });
})

app.post('/form2', (req, res) => {
  _.extend(obj, req.body);
  let name = obj.name;
  console.log(name);
  Order.replaceOne({name: name}, obj)
  .then(() => {
    res.end();
  });
})

app.post('/form3', (req, res) => {
  _.extend(obj, req.body);
  let name = obj.name;
  Order.replaceOne({name: name}, obj)
  .then(() => {
    res.end();
  });
})

app.get('/conf', (req, res) => {
  let name = obj.name;
  Order.find({name: name})
  .then((result) => {
    res.send(result[0])
  })
})


app.listen(port, () => {
  console.log(`Listening at localhost on port ${port}`);
})