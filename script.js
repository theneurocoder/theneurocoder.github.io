const themeToggle = document.getElementById("theme-toggle");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const themeToggleContainer = document.querySelector(".theme-toggle-container");
const darkModeIcon = document.querySelector(".dark-mode-icon");
const anchorElements = document.querySelectorAll("a");
const lightModeIcon = document.querySelector(".light-mode-icon");
const bannerForDarkMode = document.querySelector(".banner-dark-mode");
const guestNameInput = document.getElementById("guest-name");
const guestNameSubmitButton = document.getElementById(
  "guest-name-submit-button",
);
const bannerForLightMode = document.querySelector(".banner-light-mode");
const h2s = document.querySelectorAll("h2");
const progressContentContainer = document.querySelector(
  ".progress-content-container",
);
const progressBarRows = document.querySelectorAll(".progress-bar-row");
const progresses = document.querySelectorAll(".progress");
const nameElement = document.querySelector(".name");
const nameBrackets = document.querySelectorAll(".name .brackets");
const logoForDarkMode = document.querySelector(".logo-dark-mode");
const logoForLightMode = document.querySelector(".logo-light-mode");
const timePeriods = document.querySelectorAll(".time-period");
const valuesButton = document.getElementById("values-button");
const valueParagraph = document.getElementById("value");

// Toggle light/dark modes when mode toggle is clicked
themeToggleContainer.addEventListener("click", themeToggleFunction);

if (localStorage.getItem("theme")) {
  themeToggleFunction();
}

// Function to toggle light/dark modes
function themeToggleFunction() {
  themeToggle.classList.toggle("light-mode");
  body.classList.toggle("light-mode");
  nav.classList.toggle("light-mode");
  themeToggleContainer.classList.toggle("light-mode");
  darkModeIcon.classList.toggle("light-mode");
  lightModeIcon.classList.toggle("light-mode");

  for (let i = 0; i < h2s.length; i++) {
    h2s[i].classList.toggle("light-mode");
  }

  for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].classList.toggle("light-mode");
  }

  logoForDarkMode.classList.toggle("light-mode");
  logoForLightMode.classList.toggle("light-mode");

  // Elements in home page only
  if (window.location.pathname === "/" || window.location.pathname === "") {
    bannerForDarkMode.classList.toggle("light-mode");
    bannerForLightMode.classList.toggle("light-mode");
    guestNameInput.classList.toggle("light-mode");
    guestNameSubmitButton.classList.toggle("light-mode");
    progressContentContainer.classList.toggle("light-mode");

    for (let i = 0; i < progressBarRows.length; i++) {
      progressBarRows[i].classList.toggle("light-mode");
    }

    for (let i = 0; i < progresses.length; i++) {
      progresses[i].classList.toggle("light-mode");
      nameElement.classList.toggle("light-mode");

      for (let i = 0; i < nameBrackets.length; i++) {
        nameBrackets[i].classList.toggle("light-mode");
      }
    }
  }

  // Elements in About page only
  if (window.location.pathname === "/about.html") {
    for (let i = 0; i < timePeriods.length; i++) {
      timePeriods[i].classList.toggle("light-mode");
    }
    valuesButton.classList.toggle("light-mode");
  }

  // Add light mode to local storage if theme is toggled to light mode, and remove if theme is toggled to dark mode
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light-mode");
  } else {
    localStorage.removeItem("theme");
  }
}

// Guest name form
if (window.location.pathname === "/" || window.location.pathname === "") {
  const guestNameContainer = document.getElementById("guest-name-container");
  const guestNameForm = document.getElementById("guest-name-form");
  guestNameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const guestName = guestNameInput.value.trim();
    if (guestName !== "") {
      guestNameContainer.textContent =
        "Hello, " + guestName + "! Welcome to my site :)";
      localStorage.setItem("guest-name", guestName);
    } else {
      // Display message if user submits empty form
      guestNameInput.placeholder = "Please enter your name!";
    }
  });

  // If user has already input their name, retrieve it from local storage and display it
  const storedGuestName = localStorage.getItem("guest-name");
  if (storedGuestName) {
    guestNameContainer.textContent =
      "Hello, " + storedGuestName + "! Nice to see you again :)";
  }
}

// Values button
if (window.location.pathname === "/about.html") {
  myValues = [
    "<strong>Accessibility:</strong> Building accessible apps and sites. Using digital technology to create accommodations and improve the user’s quality of life.",
    "<strong>Beauty:</strong> Designing digital experiences that are easy on the eyes, visually stimulating, and a joy to engage with.",
    "<strong>Community:</strong> Facilitating connection, enriching relationships, and building community through digital technology.",
    "<strong>Durability:</strong> Building sites with longevity in mind, sites that grow with the user. Rejecting planned obscolescence.",
    "<strong>Empowerment:</strong> Using my skills towards empowering neurodivergent, disabled, and other marginalized people.",
    "<strong>Functionality:</strong> Building digital experiences that function smoothly and can be navigated easily—an often neglected aspect of accessibility.",
    "<strong>Growth:</strong> Continually learning how to make the internet more accessible. Continually honing my skills and learning new ones.",
    "<strong>Humanity:</strong> Always remembering that a user is, first and foremost, a human—not just a user or consumer.",
  ];

  valuesButton.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 8);
    value.innerHTML = myValues[randomNumber];
  });
}
