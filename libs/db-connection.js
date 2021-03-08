const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://chatweb:chatweb@cluster0.csivb.mongodb.net/otherchat?retryWrites=true&w=majority', {useUnifiedTopology: true});

mongoose.connection
  .once('open', () => console.log('Connected to the database'))
  .on('error', err => console.error(err));
