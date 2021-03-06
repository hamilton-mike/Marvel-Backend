const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/comic'
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('connected to mongoose...'))
