document.addEventListener("DOMContentLoaded", () => {
    let hasMouse = window.matchMedia("(pointer:fine)").matches;
    let cursor, follower;

    function createCursor() {
        if (cursor) return;
        cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);

        follower = document.createElement('div');
        follower.classList.add('cursor', 'cursor__follower');
        document.body.appendChild(follower);
    }

    function showCursor() {
        if (!cursor) createCursor();
        cursor.style.display = "block";
        follower.style.display = "block";
    }

    function hideCursor() {
        if (cursor && follower) {
            cursor.style.display = "none";
            follower.style.display = "none";
        }
    }

    function updateCursor(e) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        setTimeout(() => {
            follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }, 50);
    }

    if (hasMouse) {
        showCursor();
        window.addEventListener("mousemove", updateCursor);
    } else {
        hideCursor();
    }

    window.matchMedia("(pointer:fine)").addEventListener("change", (e) => {
        if (e.matches) {
            showCursor();
            window.addEventListener("mousemove", updateCursor);
        } else {
            hideCursor();
            window.removeEventListener("mousemove", updateCursor);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor__follower");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.style.borderRadius = "10% 50% 50% 50%";
        });

        link.addEventListener("mouseleave", () => {
            cursor.style.borderRadius = "50%";
        });
    });

    const switchButton = document.querySelector(".switch");

    switchButton.addEventListener("mouseenter", () => {
        cursor.style.borderRadius = "0% 100% 0% 100%";
    });
    
    switchButton.addEventListener("mouseleave", () => {
        cursor.style.borderRadius = "50%";
    });
});

document.querySelectorAll("img").forEach(img => {
    img.addEventListener("dragstart", event => event.preventDefault());
});

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    const text = "My Portfolio.";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            logo.innerHTML = text.substring(0, index + 1) + '<span class="curhead">|</span>';
            index++;
            setTimeout(typeEffect, 100);
        } else {
            document.querySelector('.curhead').classList.add('blink');
        }
    }

    logo.innerHTML = '<span class="curhead">|</span>';
    typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
    const emailLink = document.querySelector(".email-link");

    emailLink.addEventListener("click", (e) => {
        e.preventDefault();
        const email = "aaryav.rastogi.2005@gmail.com";
        const subject = "Inquiry";
        const body = "Hello, I wanted to ask about...";

        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else {
            window.open(`https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
        }
    });
});

function toggleMenu() {
    const navLinks = document.querySelector("nav ul");
    navLinks.classList.toggle("active");
}

document.addEventListener("click", function (event) {
    const navLinks = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");

    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});

document.querySelectorAll("section").forEach((section) => {
    const bgImage = section.getAttribute("data-bg-image");
    if (bgImage) {
        section.style.setProperty("--bg-image", bgImage);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

document.querySelector(".logo").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 100);
});

// DARK MODE TOGGLE 'ON' BY DEFAULT
const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
} else {
    localStorage.setItem("theme", "dark");
}

toggleSwitch.addEventListener("change", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem("theme", "light");
        toggleSwitch.checked = false;
    }
});
