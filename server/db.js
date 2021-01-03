const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
})

connection.connect();

connection.query('Select * from movies', (error, results) =>
  error ? console.log(error) : console.log(results));


module.exports.db = connection;
