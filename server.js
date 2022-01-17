require('dotenv').config();
require('./db/mongoose');

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const heroController = require('./controllers/heroAPI');
const teamController = require('./controllers/teamAPI');

const urlArray = ['http://localhost:3000', 'https://marvel-mern-app.herokuapp.com', 'https://shield-commander.netlify.app'];
const corsOptions = {
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "allowedHeaders": ["Content-Type"],
    origin: (origin, cb) => {
        if (urlArray.indexOf(origin) != -1 || !origin) {
            cb(null, true)
        } else {
            cb(new Error(`Origin not allowed by CORS!!!: ${origin}`))
        }
    }
}

app.use(function (err, req, res, next) {
  console.error(err)
  res.status(500).send(err.toString())
})
app.use(cors(corsOptions));
app.use(express.json());
app.use("/hero", heroController);
app.use('/team', teamController);


app.listen(PORT, () => console.log(`🕷 listening on PORT: ${PORT}`));
