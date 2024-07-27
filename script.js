const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const messageForm = document.getElementById('message-form');
const messagesDiv = document.getElementById('messages');
const adminPanel = document.getElementById('admin-panel');
const downloadUsersButton = document.getElementById('download-users');
const adminMessagesDiv = document.getElementById('admin-messages');

// Store user data in an array
let users = [];

// Store messages in an array
let messages = [];

// Function to add user to the array
function addUser(username, password) {
  users.push({ username, password });
}

// Function to add message to the array
function addMessage(message) {
  messages.push(message);
  displayMessages();
}

// Function to display messages
function displayMessages() {
  messagesDiv.innerHTML = '';
  messages.forEach((message) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
  });
}

// Event listener for login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  if (username && password) {
    // Check if user exists
    const user = users.find((user) => user.username === username);
    if (user) {
      // Check if password is correct
      if (user.password === password) {
        // Show message form
        messageForm.style.display = 'block';
        messagesDiv.style.display = 'block';
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('User not found');
    }
  }
});

// Event listener for signup form submission
signup
