// Tells the CSS that JavaScript is running (so the mobile menu can collapse)
document.documentElement.classList.add("js");

// =========================
// Mobile Navigation
// =========================
const menuButton = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

function setMenuState(isOpen) {
    mainNavigation.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close" : "Menu";
}

if (menuButton && mainNavigation) {
    // Open or close when the button is clicked
    menuButton.addEventListener("click", function () {
        const isOpen = mainNavigation.classList.contains("open");
        setMenuState(!isOpen);
    });

    // Close the menu after a link is chosen
    mainNavigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            setMenuState(false);
        });
    });

    // Close with the Escape key and return focus to the button
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && mainNavigation.classList.contains("open")) {
            setMenuState(false);
            menuButton.focus();
        }
    });
}

// =========================
// Form Validation
// =========================
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    // Each field has its input, its error message area, and a rule that
    // returns an error message (or "" when the value is fine)
    const fields = [
        {
            input: document.querySelector("#name"),
            error: document.querySelector("#name-error"),
            validate: function (value) {
                if (value === "") {
                    return "Please enter your name.";
                }
                return "";
            }
        },
        {
            input: document.querySelector("#email"),
            error: document.querySelector("#email-error"),
            validate: function (value) {
                const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value === "") {
                    return "Please enter your email address.";
                } else if (!looksLikeEmail.test(value)) {
                    return "Please enter a valid email address, like name@example.com.";
                }
                return "";
            }
        },
        {
            input: document.querySelector("#phone"),
            error: document.querySelector("#phone-error"),
            validate: function (value) {
                // Optional field: only check it if something was typed
                const digitCount = value.replace(/\D/g, "").length;
                if (value !== "" && digitCount < 10) {
                    return "Please enter a 10-digit phone number, or leave this blank.";
                }
                return "";
            }
        },
        {
            input: document.querySelector("#service"),
            error: document.querySelector("#service-error"),
            validate: function (value) {
                if (value === "") {
                    return "Please choose the service you need.";
                }
                return "";
            }
        },
        {
            input: document.querySelector("#message"),
            error: document.querySelector("#message-error"),
            validate: function (value) {
                if (value === "") {
                    return "Please describe your project.";
                }
                return "";
            }
        }
    ];

    function showError(field, message) {
        field.error.textContent = message;
        field.input.classList.add("invalid");
        field.input.setAttribute("aria-invalid", "true");
    }

    function clearError(field) {
        field.error.textContent = "";
        field.input.classList.remove("invalid");
        field.input.removeAttribute("aria-invalid");
    }

    // Returns true when the field is valid; shows the error when it is not
    function validateField(field) {
        const message = field.validate(field.input.value.trim());
        if (message === "") {
            clearError(field);
            return true;
        }
        showError(field, message);
        return false;
    }

    // Check a field when the visitor leaves it, and clear its error as soon as it is fixed
    fields.forEach(function (field) {
        field.input.addEventListener("blur", function () {
            validateField(field);
        });
        field.input.addEventListener("input", function () {
            if (field.input.classList.contains("invalid")) {
                validateField(field);
            }
        });
    });

    contactForm.addEventListener("submit", function (event) {
        // There is no server yet, so the browser should never actually submit
        event.preventDefault();
        formStatus.textContent = "";

        let firstInvalidInput = null;
        fields.forEach(function (field) {
            const isValid = validateField(field);
            if (!isValid && firstInvalidInput === null) {
                firstInvalidInput = field.input;
            }
        });

        if (firstInvalidInput !== null) {
            firstInvalidInput.focus();
            return;
        }

        formStatus.textContent = "Thank you. Your request looks complete. " +
            "This is a demonstration, so nothing was sent.";
        contactForm.reset();
    });
}

// =========================
// Business Hours Status
// =========================
const hoursStatus = document.querySelector("#hours-status");

if (hoursStatus) {
    const BUSINESS_TIME_ZONE = "America/New_York";
    const OPEN_HOUR = 8;   // 8:00 AM
    const CLOSE_HOUR = 17; // 5:00 PM
    const dayNumbers = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    // Current day and hour in Bangor, no matter where the visitor is
    function getBusinessTime() {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: BUSINESS_TIME_ZONE,
            weekday: "short",
            hour: "numeric",
            hourCycle: "h23"
        }).formatToParts(new Date());

        let day = 0;
        let hour = 0;
        parts.forEach(function (part) {
            if (part.type === "weekday") {
                day = dayNumbers[part.value];
            } else if (part.type === "hour") {
                hour = Number(part.value);
            }
        });
        return { day: day, hour: hour };
    }

    function updateHoursStatus() {
        const now = getBusinessTime();
        const isWeekday = now.day >= 1 && now.day <= 5;
        const isOpen = isWeekday && now.hour >= OPEN_HOUR && now.hour < CLOSE_HOUR;

        hoursStatus.classList.remove("open", "closed");

        if (isOpen) {
            hoursStatus.classList.add("open");
            hoursStatus.textContent = "Open now. Closes at 5:00 PM today.";
        } else {
            hoursStatus.classList.add("closed");

            let nextOpening = "Monday at 8:00 AM";
            if (isWeekday && now.hour < OPEN_HOUR) {
                nextOpening = "today at 8:00 AM";
            } else if (now.day >= 1 && now.day <= 4) {
                nextOpening = "tomorrow at 8:00 AM";
            }
            hoursStatus.textContent = "Closed now. We open " + nextOpening + ".";
        }
    }

    updateHoursStatus();
    // Keep the message accurate if the page stays open
    setInterval(updateHoursStatus, 60000);
}