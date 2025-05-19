// shared-users.js

// Load users from localStorage, or initialize as empty
window.getUsers = function () {
  return JSON.parse(localStorage.getItem("users")) || [];
};

window.saveUsers = function (users) {
  localStorage.setItem("users", JSON.stringify(users));
};
