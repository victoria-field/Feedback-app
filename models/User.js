const mongoose = require('mongoose');
// this is the same as saying const Schema = mongoose.Schema; its destructuring
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,

});

mongoose.model('users', userSchema);
