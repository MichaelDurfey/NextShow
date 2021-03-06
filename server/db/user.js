const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

mongoose.connect(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@ds131329.mlab.com:31329/nextshow`);

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
  },
  password: String,
  spotifyId: String,
  spotifyAccessToken: String,
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);
