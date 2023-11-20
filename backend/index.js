const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
const port = 5000;

// Connection URL
const url = 'mongodb://localhost:27017/notebook'; // replace with your MongoDB server URL and database name

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Check connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Yes Connected to MongoDB');
});

// Define routes and middleware here
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
