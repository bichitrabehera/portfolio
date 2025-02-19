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

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");

    // Toggle icon between bars (☰) and close (✖)
    if (dropdownMenu.classList.contains("open")) {
        toggleBtnIcon.classList.replace("fa-bars", "fa-times");
    } else {
        toggleBtnIcon.classList.replace("fa-times", "fa-bars");
    }
};

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("open");
        toggleBtnIcon.classList.replace("fa-times", "fa-bars"); // Reset icon
    }
});

