// signup.js

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("new-username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  let users = getUsers();

  const userExists = users.some(user => user.username.toLowerCase() === username.toLowerCase());
  if (userExists) {
    errorMsg.textContent = "Username already taken.";
    return;
  }

  const newUser = { username, email, password };
  users.push(newUser);
  saveUsers(users);

  successMsg.textContent = "Account created successfully! You can now log in.";

  // Optionally reset form
  document.getElementById("signupForm").reset();
});
