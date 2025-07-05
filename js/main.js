//   navbar function
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".fa-bars");
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
  });

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);

  function handleScroll() {
    menuIcon.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");

    if (window.scrollY > 30) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  }
});

// pregancy tracker section
document.addEventListener("DOMContentLoaded", () => {
  const dueDateInput = document.getElementById("due-date");
  const resultDiv = document.getElementById("tracker-result");
  const currentWeekSpan = document.getElementById("current-week");
  const babySizePara = document.getElementById("baby-size");
  const calculateBtn = document.getElementById("calculate-week");

  const babySizes = [
    "Poppy seed",
    "Blueberry",
    "Raspberry",
    "Lime",
    "Plum",
    "Peach",
    "Avocado",
    "Onion",
    "Mango",
    "Sweet Potato",
    "Banana",
    "Papaya",
    "Coconut",
    "Pineapple",
    "Cantaloupe",
    "Lettuce",
    "Cauliflower",
    "Butternut Squash",
    "Pumpkin",
    "Watermelon",
  ];

  calculateBtn.addEventListener("click", () => {
    const dueDate = new Date(dueDateInput.value);
    const today = new Date();

    const daysPregnant = Math.floor(
      (280 * 24 * 60 * 60 * 1000 - (dueDate - today)) / (1000 * 60 * 60 * 24)
    );
    const currentWeek = Math.max(1, Math.min(40, Math.floor(daysPregnant / 7)));

    if (isNaN(currentWeek) || currentWeek < 1 || currentWeek > 40) {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = "<p>Please enter a valid due date.</p>";
      return;
    }

    resultDiv.style.display = "block";
    currentWeekSpan.textContent = `Week ${currentWeek}`;
    const fruit =
      babySizes[Math.min(babySizes.length - 1, Math.floor(currentWeek / 2))];
    babySizePara.innerHTML = `Baby is the size of a <strong>${fruit}</strong>`;

    // Placeholder updates
    document
      .getElementById("baby-box")
      .querySelector(
        "p"
      ).textContent = `Week ${currentWeek}: Your baby is growing rapidly and becoming more active.`;
    document
      .getElementById("body-box")
      .querySelector(
        "p"
      ).textContent = `You may feel changes like more frequent urination or fatigue.`;
    document
      .getElementById("tasks-box")
      .querySelector(
        "p"
      ).textContent = `Consider scheduling your next prenatal appointment and monitoring diet.`;
  });
});

// LOGIN MODAL TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeLoginModal");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
});
  
