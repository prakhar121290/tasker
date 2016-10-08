const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/react-boilerplate'

mongoose.connect(mongoURL, function(err) {
  if(err) { process.exit(-1); }
  console.log('Connected to MongoDB');
});
