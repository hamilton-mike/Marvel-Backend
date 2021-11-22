const mongoose = require('mongoose');
const DB_URL = process.env.REACT_APP_DB_URL || 'mongodblink'

mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('connected to mongoose...'))
