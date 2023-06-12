let users = [];

function getUser(username) {
  return users.find(user => user.username === username);
}

function addUser(username, password) {
  users.push({ username, password });
}

module.exports = { getUser, addUser };
