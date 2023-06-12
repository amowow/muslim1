const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const joinButton = document.getElementById('join-button');
const leaveButton = document.getElementById('leave-button');

let localStream;
let remoteStream;

// Function to handle local video stream
async function handleLocalVideoStream() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localStream = stream;
        localVideo.srcObject = stream;
    } catch (error) {
        console.log('Error accessing local media devices: ' + error);
    }
}

// Function to handle remote video stream
function handleRemoteVideoStream(stream) {
    remoteStream = stream;
    remoteVideo.srcObject = stream;
}

// Function to join the video meeting
joinButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localStream = stream;
        localVideo.srcObject = stream;
        // Connect to the video conferencing server or peer-to-peer network to establish connections with other participants
        // Handle incoming remote streams and display them using handleRemoteVideoStream() function
    } catch (error) {
        console.log('Error joining the meeting: ' + error);
    }
});

// Function to leave the video meeting
leaveButton.addEventListener('click', () => {
    localStream.getTracks().forEach(track => {
        track.stop();
    });
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
});

// Call the function to handle local video stream
handleLocalVideoStream();

// Share button
const screenShareButton = document.getElementById('screen-share-button');
const shareMessage = document.getElementById('share-message');

screenShareButton.addEventListener('click', () => {
  if (!screenShareButton.classList.contains('active')) {
    startScreenSharing();
  } else {
    stopScreenSharing();
  }
});

function startScreenSharing() {
  // Perform screen sharing logic here
  // This is where you would integrate actual screen sharing implementation using WebRTC or a screen sharing library
  // For now, we'll simulate the behavior by toggling the "active" class and updating the share message
  screenShareButton.classList.add('active');
  shareMessage.innerText = 'Screen sharing in progress...';
}

function stopScreenSharing() {
  // Stop screen sharing logic here
  // This is where you would stop the screen sharing stream and clean up any resources
  // For now, we'll simulate the behavior by toggling the "active" class and updating the share message
  screenShareButton.classList.remove('active');
  shareMessage.innerText = 'Screen sharing stopped.';
}

// Chat code
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = chatInput.value;

  displayMessage(message);

  chatInput.value = '';
});

function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Login code
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
