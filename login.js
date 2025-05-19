// login.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const errorMsg = document.getElementById("errorMsg");

  const users = getUsers();

  const matchedUser = users.find(
    user => user.username.toLowerCase() === username.toLowerCase() && user.password === password
  );

  if (matchedUser) {
    errorMsg.style.color = "lightgreen";
    errorMsg.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "secondary.html";
    }, 1000);
  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Invalid username or password.";
  }
});
