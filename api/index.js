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

app.get('api/products/sofa', (req, res) => {
  res.json(sofa);
});
app.get('api/products/chair', (req, res) => {
  res.json(chair);
});
app.get('api/products/bed', (req, res) => {
  res.json(bed);
});
app.get('api/products/shelf', (req, res) => {
  res.json(shelf);
});
app.get('api/products/table', (req, res) => {
  res.json(table);
});
app.get('api/products/vase', (req, res) => {
  res.json(vase);
});
app.get('api/products/clock', (req, res) => {
  res.json(clock);
});
app.get('api/products/figurines', (req, res) => {
  res.json(fig);
});

module.exports = app;
