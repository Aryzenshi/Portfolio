// Cursor visibility on touch devices and laptops
document.addEventListener("DOMContentLoaded", () => {
  let hasMouse = window.matchMedia("(pointer:fine)").matches;
  let cursor, follower;

  function createCursor() {
    if (cursor) return;
    cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    follower = document.createElement("div");
    follower.classList.add("cursor", "cursor__follower");
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

// Cursor interactive style changes
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  const links = document.querySelectorAll("a, .view-cert-btn");
  const switchButton = document.querySelector(".switch");
  const carouselbtnLeft = document.querySelector(".left-btn");
  const carouselbtnRight = document.querySelector(".right-btn");

  const mouseExit = document.querySelectorAll(
    "a, .switch, .left-btn, .right-btn, .view-cert-btn"
  );

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.borderRadius = "10% 50% 50% 50%";
    });
  });
  switchButton.addEventListener("mouseenter", () => {
    cursor.style.borderRadius = "0% 100% 0% 100%";
  });

  carouselbtnLeft.addEventListener("mouseenter", () => {
    cursor.style.borderRadius = "10% 50% 50% 10%";
  });
  carouselbtnRight.addEventListener("mouseenter", () => {
    cursor.style.borderRadius = "50% 10% 10% 50%";
  });

  mouseExit.forEach((exit) => {
    exit.addEventListener("mouseleave", () => {
      cursor.style.borderRadius = "50%";
    });
  });
});

// Drag prevention
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (event) => event.preventDefault());
});

// NAVBAR
document.querySelector(".logo").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 100);
});

// NAVBAR ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    rootMargin: "-30% 0px -30% 0px",
    threshold: 0.1,
  };

  let currentActive = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting) {
        if (currentActive && currentActive !== navLink) {
          currentActive.classList.remove("active");
        }

        navLink.classList.add("active");
        currentActive = navLink;
      } else if (navLink === currentActive) {
        navLink.classList.remove("active");
        currentActive = null;
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});

// Typing effect of My Portfolio.
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const text = "My Portfolio.";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      logo.innerHTML =
        text.substring(0, index + 1) + '<span class="curhead">|</span>';
      index++;
      setTimeout(typeEffect, 100);
    } else {
      document.querySelector(".curhead").classList.add("blink");
    }
  }

  logo.innerHTML = '<span class="curhead">|</span>';
  typeEffect();
});

// Email link Regex
document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.querySelector(".email-link");

  emailLink.addEventListener("click", (e) => {
    e.preventDefault();
    const email = "aaryav.rastogi.2005@gmail.com";
    const subject = "Inquiry";
    const body = "Hello, I wanted to ask about...";

    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        "_blank"
      );
    }
  });
});

// Hamburger menu toggle function
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

// Section background image loader
document.querySelectorAll("section").forEach((section) => {
  const bgImage = section.getAttribute("data-bg-image");
  if (bgImage) {
    section.style.setProperty("--bg-image", bgImage);
  }
});

// Fade in effect on section load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
});

// DARK MODE TOGGLE 'ON' BY DEFAULT
const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark-mode");
  toggleSwitch.checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.toggle("dark-mode", savedTheme === "dark");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
  themeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});

// Projects carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".projects-carousel");
  const slides = document.querySelectorAll(".project-block");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const dotsContainer = document.querySelector(".carousel-dots");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoScrollInterval;
  let isScrolling = false;

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function updateDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === currentIndex) dot.classList.add("active");
      dot.addEventListener("click", () => jumpToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function jumpToSlide(index) {
    if (isScrolling) return;
    isScrolling = true;

    currentIndex = index;
    const slideWidth = slides[0].clientWidth;
    const scrollAmount = index * slideWidth;

    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    updateSlides();
    updateDots();

    setTimeout(() => {
      isScrolling = false;
    }, 500);
  }

  function autoScroll() {
    currentIndex = (currentIndex + 1) % totalSlides;
    jumpToSlide(currentIndex);
  }

  function startAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(autoScroll, 3000);
  }

  function pauseAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    jumpToSlide(currentIndex);
    pauseAutoScroll();
  });

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    jumpToSlide(currentIndex);
    pauseAutoScroll();
  });

  carousel.addEventListener("mouseenter", pauseAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);
  dotsContainer.addEventListener("mouseenter", pauseAutoScroll);
  dotsContainer.addEventListener("mouseleave", startAutoScroll);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoScroll();
        } else {
          pauseAutoScroll();
        }
      });
    },
    { threshold: 0.9 }
  );

  const projectsSection = document.querySelector("#projects");
  observer.observe(projectsSection);

  startAutoScroll();
  updateSlides();
  updateDots();
});

// SKILLS GRID
document.querySelectorAll(".skill-card").forEach((card) => {
  const skill = card.getAttribute("data-skill");
  const percent = card.getAttribute("data-percent");

  card.innerHTML = `
                <canvas id="chart-${skill}"></canvas>
                <h3>${skill}</h3>
                <p>Proficiency: ${percent}%</p>
            `;

  const ctx = document.getElementById(`chart-${skill}`).getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: ["#4CAF50", "#555"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: false,
      cutout: "60%",
      rotation: 180,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
    },
  });
});

// CERTFICATES JS
function openCertificate(src) {
  const certPopup = document.getElementById("certPopup");
  const certContent = document.getElementById("certContent");

  certContent.innerHTML = "";

  if (src.endsWith(".pdf")) {
    certContent.innerHTML = `<iframe src="${src}" width="100%" height="100%"></iframe>`;
  } else {
    certContent.innerHTML = `<img src="${src}" alt="Certificate">`;
  }

  certPopup.classList.add("active");
}

function closeCertificate() {
  document.getElementById("certPopup").classList.remove("active");
}
