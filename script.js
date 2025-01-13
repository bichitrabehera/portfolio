const homeSection = document.getElementById("home");

homeSection.addEventListener("touchstart", function () {
    homeSection.querySelector("::before").style.opacity = '1';
})
homeSection.addEventListener("touchend", function () {
    homeSection.querySelector("::before").style.opacity = '0.3';
})

document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS
    emailjs.init("Wh97iWEqRn-1zGOLv"); // Replace "YOUR_USER_ID" with your actual EmailJS User ID

    // Get the form element
    const form = document.getElementById("contactForm");

    // Add a submit event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        // Send the email
        emailjs.send("service_pcyhp5r", "template_wmgzyly", formData)
            .then(() => {
                alert("Email sent successfully!");
                form.reset(); // Clear the form fields
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Failed to send the email. Please try again.");
            });
    });
});



