const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
});

revealItems.forEach((item) => observer.observe(item));

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  const setNavOpen = (open) => {
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavOpen(!isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  const mediaQuery = window.matchMedia("(min-width: 641px)");
  const handleDesktopState = (event) => {
    if (event.matches) {
      setNavOpen(false);
    }
  };

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleDesktopState);
  } else {
    mediaQuery.addListener(handleDesktopState);
  }
}
