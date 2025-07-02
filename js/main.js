//   navbar function
$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(Window).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });
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
