require('dotenv').config();
require('./db/mongoose')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require('cors');

const comicController = require('./controllers/comicAPI')

app.use(express.json())
app.use("/comic", comicController)

app.listen(PORT, () => console.log(`🕷 listening on PORT: ${PORT}`))
