const mongo = require('mongoose')
const { connectionString } = require('../config/db')

const options = {
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
    //autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

module.exports.connectDB = async () => {
    mongo.connect(connectionString,options)
    .then(() => console.log('Mongo db connected'))
    .catch(error => console.log(error));
}