require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 9000;

require('./db/mongoose')

const comic = require('./conrollers/comic')


app.use(express.json())
app.use('/comic', comic)
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`))
