document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector('.cursor');
    let prevX = 0, prevY = 0;
    let rotation = 0;
    
    function showCursor() {
        cursor.style.display = "block";
    }

    function hideCursor() {
        cursor.style.display = "none";
    }

    window.addEventListener("mousemove", (e) => {
        showCursor();

        const { clientX: x, clientY: y, target } = e;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        const deltaX = x - prevX;
        const deltaY = y - prevY;

        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
            let targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            targetAngle = Math.max(-30, Math.min(30, targetAngle));

            if (target.tagName === "A" && target.hasAttribute("href")) {
                targetAngle = 0;
                cursor.classList.add("hovering-link");
            } else {
                cursor.classList.remove("hovering-link");
            }

            rotation = rotation * 0.8 + targetAngle * 0.2;
            cursor.style.transform = `rotate(${rotation}deg)`;
        }

        prevX = x;
        prevY = y;
    });

    window.addEventListener("touchstart", hideCursor);
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