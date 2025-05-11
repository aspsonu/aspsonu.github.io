function toggleContent(headerEl) {
  const content = headerEl.nextElementSibling;
  const icon = headerEl.querySelector(".toggle-icon");

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.textContent = "+";
  } else {
    content.style.display = "block";
    icon.textContent = "−";
  }
}

/*========== Typing animation in home page ==========*/
const typed = new Typed(".text", {
  strings: ["Programming", "Web Development", "Building API's", "Cloud Deployment"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

const exp_typed = new Typed(".exp_text", {
  strings: ["Java !", "Spring Framework !", "Web Development !"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*========== Scroll sections active link in navbar ==========*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  const top = window.scrollY;
  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Scroll-based navbar styling
  const navbar = document.getElementById("header");
  if (navbar) {
    if (top > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // "Go to top" button toggle
  const toTop = document.querySelector(".top");
  if (toTop) {
    toTop.classList.toggle("active", top > 100);
  }

  // Scroll Reveal Animation
  const cards = document.querySelectorAll(".reveal");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const eduSection = document.getElementById("Education");
  const mainContent = document.getElementById("main-content");
  const navLinks = document.querySelectorAll("nav.navbar a");

  // Handle navbar clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Prevent the default navigation if it's for Education or Academics
      if (targetId === "#Education" || targetId === "#Academics") {
        e.preventDefault();
        
        // Show Education section and hide main content
        eduSection?.classList.add("show");
        mainContent?.classList.add("hide");

        // Optional: smooth scrolling to the section (you can remove this if not needed)
        eduSection?.scrollIntoView({ behavior: "smooth" });

        // Remove the hash from URL (without affecting the page scroll)
        history.pushState(null, "", " ");
      } else {
        // If another section is clicked, reset visibility
        eduSection?.classList.remove("show");
        mainContent?.classList.remove("hide");
      }

      // Close menu if open (for responsive navbar)
      const toggle = document.getElementById("menu-toggle");
      if (toggle?.checked) toggle.checked = false;
    });
  });

  // Handle "Academics & Experience" button (different href now)
  const showEduBtn = document.getElementById("show-edu-btn");
  showEduBtn?.addEventListener("click", function (e) {
    e.preventDefault();

    // Show Education section and hide main content
    eduSection?.classList.add("show");
    mainContent?.classList.add("hide");

    // Optional: smooth scrolling to the section (you can remove this if not needed)
    eduSection?.scrollIntoView({ behavior: "smooth" });

    // Just remove the hash from the URL to avoid affecting the page
    history.pushState(null, "", " ");
  });

  // Animate degree boxes
  const degreeBoxes = document.querySelectorAll(".degree-box");
  degreeBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.style.animation = "slideIn 1s forwards";
    }, index * 500);
  });

  // Flip all coins when section is in view
  const allCoins = document.querySelectorAll(".coin");
  const degreesSection = document.querySelector(".degrees-section");

  const allCoinsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        allCoins.forEach((coin) => {
          coin.classList.add("flip");
          setTimeout(() => coin.classList.remove("flip"), 1000);
        });
      }
    },
    { threshold: 0.5 }
  );

  if (degreesSection) allCoinsObserver.observe(degreesSection);

  // Flip individual coins
  const individualCoinObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const coin = entry.target;
        coin.classList.add("flip");
        setTimeout(() => coin.classList.remove("flip"), 1000);
      }
    },
    { threshold: 0.5 }
  );

  allCoins.forEach((coin) => individualCoinObserver.observe(coin));

  // Experience coin logo
  const allExpCoins = document.querySelectorAll(".exp-coin");
  const experienceSection = document.querySelector(".experience-content");

  const allExpCoinsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        allExpCoins.forEach((coin) => {
          coin.classList.add("exp-flip");
          setTimeout(() => coin.classList.remove("exp-flip"), 1000);
        });
      }
    },
    { threshold: 0.5 }
  );

  if (experienceSection) allExpCoinsObserver.observe(experienceSection);

  const individualExpCoinObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const coin = entry.target;
        coin.classList.add("exp-flip");
        setTimeout(() => coin.classList.remove("exp-flip"), 1000);
      }
    },
    { threshold: 0.5 }
  );

  allExpCoins.forEach((coin) => individualExpCoinObserver.observe(coin));
});
