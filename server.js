const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('index', { message: 'Welcome to the Node.js server!' });
});

app.get('/how', (req, res) => {
    res.render('how', { message: 'How to use this server' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});