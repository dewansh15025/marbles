const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set up the static files middleware
app.use(express.static('public'));

// Import routes
//const notesRoutes = require('./routes/notes');

// Set up the routes middleware

// Home page route
app.get('/', (req, res) => {
    res.redirect('/notes');
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));

