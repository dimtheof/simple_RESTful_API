const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routes
app.get('/', (req,res) => {
    res.send('Home here');
});

// Connect to db
mongoose.connect(process.env.DB_CREDENTIALS,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to db')
);

//Boot the server
app.listen(PORT);
