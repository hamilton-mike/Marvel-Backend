require('dotenv').config();
require('./db/mongoose')
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const heroController = require('./controllers/heroAPI');
const teamController = require('./controllers/teamAPI');

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
app.use("/heros", heroController);
app.use('/team', teamController);
const proxy = require('express-http-proxy');
app.use('/', proxy('http://gateway.marvel.com/v1/public'))

app.listen(PORT, () => console.log(`🕷 listening on PORT: ${PORT}`));
