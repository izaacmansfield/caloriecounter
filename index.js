// Import the required library for database access
const mysql = require("mysql");

// Create a connection to the database
var con = mysql.createConnection({
  host: "107.180.1.16",
  user: "sprc2023team3",
  password: "sprc2023team3",
  database: "sprc2023team3"
});

// Connect to the database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");

  // Fetch the login credentials from the database
  var sql = "SELECT username, password FROM users";
  con.query(sql, function(err, result) {
    if (err) throw err;

    // Store the result in a list
    var users = [];
    for (var i = 0; i < result.length; i++) {
      users.push({
        username: result[i].username,
        password: result[i].password
      });
    }

    console.log("Users:", users);
  });
});
  
  // Function to validate login credentials
  function validateLogin(username, password) {
    // Search the database for a matching username and password
    for (var i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        // Login is successful
        return true;
      }
    }
  
    // Login failed
    return false;
  }

  var form = document.getElementById("login-form");

  // Add a submit event listener to the form
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the username and password values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  });

  
  if (validateLogin(username, password)) {
    // Login successful
    console.log("Login successful!");
    window.location.href = "./index.html";
  } else {
    // Login failed
    console.log("Login failed. Please try again.");
  }

  