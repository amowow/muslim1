const { getUser } = require('./database');

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    const user = getUser(username);

    if (user && user.password === password) {
      // Redirect to the home page or any other authenticated page
      window.location.href = "account.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  } else {
    alert("Please enter a username and password.");
  }
});
