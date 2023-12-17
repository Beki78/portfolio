function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
}

function sendMail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "bakiget78@gmail.com",
    Password: "0978101611",
    To: "bakiget78@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
