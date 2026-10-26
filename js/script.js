// JavaScript will be developed in a later phase.
console.log("JavaScript loaded successfully.");
// =========================
// Mobile Navigation
// =========================
const menuButton = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

function toggleMenu() {
    const isOpen = mainNavigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
}

if (menuButton && mainNavigation) {
    menuButton.addEventListener("click", toggleMenu);
}

// =========================
// Form Validation
// =========================
// showError(), clearError(), validateForm(), submit listener, success message

// =========================
// Additional Feature (FAQ / tabs / filter / gallery)
// =========================