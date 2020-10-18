// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtLDZsguLiMjI2qfm13C0u8xcR3-fNpBk",
  authDomain: "trident-digital.firebaseapp.com",
  databaseURL: "https://trident-digital.firebaseio.com",
  projectId: "trident-digital",
  storageBucket: "trident-digital.appspot.com",
  messagingSenderId: "150154690445",
  appId: "1:150154690445:web:64c0536c3d1156f88687c4",
  measurementId: "G-6L0TTYLHNG"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var city = getInputVal('city');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, city, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, city, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    city: city,
    email: email,
    phone: phone,
    message: message
  });
}