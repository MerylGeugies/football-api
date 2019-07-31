const express = require('express');
const app = express();
const port = 4000;
const db = require('./db');
const Team = require('./team/model');

app.listen(port, () => console.log(`Football app listening on port ${port}.`))