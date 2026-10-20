

var form = document.getElementById("contact-form");
var emailInput = document.getElementById("visitor-email");
var messageInput = document.getElementById("visitor-message");
var formMessage = document.getElementById("form-message");

var myEmail = "amberesguerra.05@gmail.com";

form.addEventListener("submit", function (event) {

  event.preventDefault();

  var visitorEmail = emailInput.value;
  var visitorMessage = messageInput.value;

  if (visitorEmail == "" || visitorEmail.indexOf("@") == -1) {
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  var subject = "Hello from your portfolio";
  var body = visitorMessage + "\n\nMy email: " + visitorEmail;

  window.location.href =
    "mailto:" + myEmail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  formMessage.textContent = "Thank you! Your email app should open now.";
});
