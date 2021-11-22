const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

const comic = require('./conrollers/comic')

app.use('/comic', comic)
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`))
