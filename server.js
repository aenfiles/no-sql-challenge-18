const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Linking models folder to the server
const { User, Thought } = require('./models');

// Linking package.json to the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetdb', {
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});