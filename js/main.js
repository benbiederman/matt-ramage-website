const skipBtn = document.querySelector(".skip-nav-btn");
const navBtn = document.querySelector(".header-menu-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");
const windowSize = window.innerWidth;

if (windowSize > 1024) {
  navLinks.forEach((link) => {
    link.tabIndex = 0;
  });
} else {
  navLinks.forEach((link) => {
    link.tabIndex = -1;
  });
}

//Navigation Menu Button
navBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    menuBtnHandler();
  }
});

navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtnHandler();
});

function menuBtnHandler() {
  navList.classList.toggle("nav-list-active");
  navBtn.classList.toggle("header-menu-active");
  if (navBtn.classList.contains("header-menu-active")) {
    navBtn.ariaExpanded = "true";
    if (windowSize <= 1024) {
      navLinks.forEach((link) => {
        link.tabIndex = 0;
      });
    }
  } else {
    navBtn.ariaExpanded = "false";
    if (windowSize <= 1024) {
      navLinks.forEach((link) => {
        link.tabIndex = -1;
      });
    }
  }
}

// Skip to Content Button
skipBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    skipContentBtnHandler();
  }
});

skipBtn.addEventListener("click", () => {
  skipContentBtnHandler();
});

function skipContentBtnHandler() {
  window.location.href = "#main-content";
}
