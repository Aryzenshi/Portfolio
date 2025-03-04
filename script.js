document.addEventListener("DOMContentLoaded", () => {
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; 

    const root = document.querySelector('html');

    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    root.appendChild(cursor);

    const follower = document.createElement('div');
    follower.classList.add('cursor', 'cursor__follower');
    root.appendChild(follower);

    window.addEventListener("mousemove", (e) => {
        setPosition(cursor, e);
        setPositionWithDelay(follower, e);
    });

    function setPosition(element, e) {
        element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }

    function setPositionWithDelay(element, e) {
        setTimeout(() => {
            element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }, 50);
    }
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

    logo.innerHTML = '<span class="cursor">|</span>';
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
