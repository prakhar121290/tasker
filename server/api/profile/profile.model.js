const mongoose = require('mongoose');

const GithubSchema = new mongoose.Schema({
  login: {type: String, required: true, unique: true},
  id: {type: String, required: true, unique: true},
  avatal_url: {type: String},
  name: {type: String},
  company: {type: String},
  location: {type: String},
  updated_at: {type: Date}
});

const ProfileSchema = new mongoose.Schema({
  name: {type: String},
  github: {type: GithubSchema, required: true},
  location: {type: String}
});

ProfileSchema.pre('save', function(next) {
  this.name = this.github.name;
  this.location = this.github.location;
  next();
});

module.exports = mongoose.model('Profile',ProfileSchema);
