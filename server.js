const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');


const PORT = process.env.PORT || 3000;
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('mvc_tech', 'root', 'nylaforever21!', {
  host: 'localhost',
  dialect:'mysql' 
});

sequelize.authenticate()
  .then(() =>{
    console.log("database connected")
    // app.listen(`Server started on port ${PORT}`);
  }) 
  .catch(err => console.log('Error: ' + err));

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' directory

app.use(session({
  secret: 'secret_key',
  resave: true,
  saveUninitialized: true
}));


// Define mongoose schema and models (User, BlogPost, Comment) - similar to previous example

// Routes handling user interactions

// Homepage route
app.get('/', (req, res) => {
  // Your implementation for homepage rendering
});


// Other routes (e.g., login, signup, dashboard, etc.) handling user interactions...

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
