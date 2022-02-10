# Marvel-Backend

## Description 

Heres a quick summary of the backend. 
* Use CORS package from Node
* Express functions for request-response cycle 
* Models have a One to Many Relationship
* Controllers hold routes for each Model
  - Find
  - Find By Id
  - Create
  - Find By Id And Update
  - Find By Id And Remove

## Code Snippets
### One to Many Relationship
```js
const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    marvel: {type: Number },
    comics: { type: Number },
    events: { type: Number },
    stories: { type: Number },
    thumbnail: { type: String },
    team: { type: mongoose.Types.ObjectId, ref: "Team"}
})
```

```js
const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    title: { type: String, require: true }
})

module.exports = mongoose.model('Team', teamSchema)
```

### Handling CORS
```js
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
```
