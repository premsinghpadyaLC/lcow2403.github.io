// contact.js

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if any field is empty
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert("One among Name, Email, Subject, Message fields are/is empty. Please have a look.");
        return false;
    }

    return true;
}
