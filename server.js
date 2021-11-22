require('dotenv').config();
require('./db/mongoose')
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const comicController = require('./controllers/comicAPI')

const urlArray = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, cb) => {
        if (urlArray.indexOf(origin) != -1 || !origin) {
            cb(null, true)
        } else {
            cb(new Error('Not allowed by CORS!!!'))
        }
    }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/comic", comicController);

app.listen(PORT, () => console.log(`🕷 listening on PORT: ${PORT}`))
