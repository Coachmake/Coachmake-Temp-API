const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const futureUserSchema = new Schema({
    firstName: String,
    email: String
})


const FutureUser = mongoose.model('FutureUser', futureUserSchema);

module.exports = FutureUser;