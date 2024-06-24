const express = require('express');
const mysql = require('mysql');

const app = express();

// MySQL connection config
const connection = mysql.createConnection({
  host: 'mysql-container', // Docker container name
  user: 'root',
  password: 'your_password', // MYSQL_ROOT_PASSWORD set in docker-compose.yml
  database: 'my_database', // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js and MySQL!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
