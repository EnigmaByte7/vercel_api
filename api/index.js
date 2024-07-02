const express = require('express');
const cors = require('cors');

const app = express();

const sofa = require('./sofa');
const chair = require('./chair');
const table = require('./table');
const bed = require('./bed');
const shelf = require('./shelf');
const vase = require('./vase');
const clock = require('./clock');
const fig = require('./fig');

app.use(cors());

app.get('/products/sofa', (req, res) => {
  res.json(sofa);
});
app.get('/products/chair', (req, res) => {
  res.json(chair);
});
app.get('/products/bed', (req, res) => {
  res.json(bed);
});
app.get('/products/shelf', (req, res) => {
  res.json(shelf);
});
app.get('/products/table', (req, res) => {
  res.json(table);
});
app.get('/products/vase', (req, res) => {
  res.json(vase);
});
app.get('/products/clock', (req, res) => {
  res.json(clock);
});
app.get('/products/figurines', (req, res) => {
  res.json(fig);
});

module.exports = app;
