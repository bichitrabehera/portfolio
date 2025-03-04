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
    emailjs
      .send("service_pcyhp5r", "template_wmgzyly", formData)
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
  if (
    !toggleBtn.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("open");
    toggleBtnIcon.classList.replace("fa-times", "fa-bars"); // Reset icon
  }
});

var tl = gsap.timeline();

tl.from(".logo", {
  y: -50,
  scrub: 0.3,
  stagger: 0.1,
  duration: 0.5,
});

tl.from(".right li", {
  y: -50,
  scrub: 0.3,
  stagger: 0.1,
  duration: 0.5,
});

tl.from(
  ".toggle-btn",
  {
    y: -50,
    scrub: 0.3,
    stagger: 0.1,
    duration: 0.5,
  },
  "=-1"
);

tl.from(
  ".heading-about",
  {
    x: -1000,
    duration: 0.5,
    scrub: 0.3,
    stagger: 0.1,
    duration: 0.5,
  },
  "=-1"
);

tl.from(
  ".homeabout",
  {
    x: -1000,
    opacity: 0,
    scrub: 0.3,
    stagger: 0.1,
    duration: 0.5,
  },
  "=-1"
);

tl.from(".heroo-btn", {
  opacity: 0,
  scrub: 0.3,
  stagger: 0.1,
  duration: 0.5,
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateSection(target, animationProps) {
    gsap.from(target, {
      ...animationProps,
      scrollTrigger: {
        trigger: target,
        start: "top 100%", // When 85% of the element is visible
        end: "top 80%", // Reverse when 20% is visible
        toggleActions: "play reverse play reverse",
        scrub: 1, // Smooth scrolling effect
        markers: false, // Set to true for debugging
      },
    });
  }
  gsap.utils.toArray(".titles").forEach((title, index) => {
    animateSection(title, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.1,
    });
  });
  gsap.utils.toArray(".underline").forEach((underline, index) => {
    animateSection(underline, { width: "0%", duration: 1, delay: index * 0.1 });
  });
  animateSection(".about-info", { opacity: 0, y: 50, duration: 1 });
  animateSection(".aboutcont", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.3,
  });
  animateSection(".skills-vert", {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.3,
  });
  gsap.utils.toArray(".rowskill h2").forEach((skill, index) => {
    animateSection(skill, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: index * 0.1,
    });
  });
  gsap.utils.toArray(".project").forEach((project, index) => {
    animateSection(project, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2,
    });
  });
  animateSection(".contact-section", { opacity: 0, y: 50, duration: 1 });
  gsap.utils
    .toArray("#contactForm input, #contactForm textarea, .contact-btn")
    .forEach((field, index) => {
      animateSection(field, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: index * 0.1,
      });
    });
  animateSection(".footer-name", { opacity: 0, x: -50, duration: 1 });
  animateSection(".social-links", { opacity: 0, x: 50, duration: 1 });
});


particlesJS("particles-js", {
  particles: {
      number: {
          value: 100, // Number of particles
          density: {
              enable: true,
              value_area: 800
          }
      },
      color: { value: "#ffffff" }, // Particle color
      shape: {
          type: "circle", // Circle, edge, triangle, polygon, star, image
      },
      opacity: {
          value: 0.5,
          random: true
      },
      size: {
          value: 3,
          random: true
      },
      move: {
          speed: 5, // Speed of particles
          direction: "none",
          out_mode: "out"
      },
      line_linked: {
          enable: true, // Lines between particles
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
      }
  },
  interactivity: {
      events: {
          onhover: {
              enable: true,
              // mode: "repulse" // Particles move away on hover
          },
          onclick: {
              enable: true,
              mode: "push" // More particles appear on click
          }
      },
      modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
      }
  }
});
