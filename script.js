// Smooth scroll to Projects
function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log(error);
      }
    );
  });

  .then(function () {
  document.getElementById("contact-form").reset();
  alert("✅ Message sent!");
});