
// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =========================
// FORM VALIDATION
// =========================

const eventForm = document.getElementById("eventForm");

eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name =
        eventForm.querySelector('input[type="text"]').value.trim();

    const phone =
        eventForm.querySelector('input[type="tel"]').value.trim();

    const email =
        eventForm.querySelector('input[type="email"]').value.trim();

    const eventType =
        eventForm.querySelector("select").value;

    const people =
        eventForm.querySelector('input[type="number"]').value;

    const date =
        eventForm.querySelector('input[type="date"]').value;

    const time =
        eventForm.querySelector('input[type="time"]').value;

    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        eventType === "" ||
        people === "" ||
        date === "" ||
        time === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert(
        "Thank you! Your catering inquiry has been submitted successfully."
    );

    eventForm.reset();
});

// =========================
// FADE-IN ANIMATION
// =========================

const sections = document.querySelectorAll(
    ".service-card, .menu-card, .event-card, .feature-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// =========================
// ACTIVE NAV LINK
// =========================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.classList.add("visible");
    } else {
        topBtn.classList.remove("visible");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

