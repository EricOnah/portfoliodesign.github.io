const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const hamburger = select(".header .nav-bar .nav-list .hamburger");
const mobileMenu = select(".header .nav-bar .nav-list ul");
const menuItem = selectAll(".header .nav-bar .nav-list ul li a");
const header = select(".header.container");
const toggleBtn = select(".toggle-btn");
const body = document.querySelector("html");
const title = selectAll(".section-title");
const p = selectAll("p");
const h2 = selectAll("h2");
const cta = select(".col-right .cta");
const contactItem = selectAll(".contact-item");
const serviceItem = selectAll(".service-item");
const contactInfo = selectAll(".contact-info");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  toggleBtn.classList.add("active");
  body.classList.add("active");
  title.forEach((title) => title.classList.add("active"));
  p.forEach((p) => p.classList.add("active"));
  h2.forEach((h2) => h2.classList.add("active"));
  contactItem.forEach((item) => item.classList.add("active"));
  contactInfo.forEach((info) => info.classList.add("active"));
  serviceItem.forEach((item) => item.classList.add("active"));
  cta.classList.add("active");
  localStorage.setItem("darkMode", "on");
};

const disableDarkMode = () => {
  toggleBtn.classList.remove("active");
  body.classList.remove("active");
  title.forEach((title) => title.classList.remove("active"));
  p.forEach((p) => p.classList.remove("active"));
  h2.forEach((h2) => h2.classList.remove("active"));
  contactItem.forEach((item) => item.classList.remove("active"));
  contactInfo.forEach((info) => info.classList.remove("active"));
  serviceItem.forEach((item) => item.classList.remove("active"));
  cta.classList.remove("active");
  localStorage.setItem("darkMode", "off");
};

if (darkMode === "on") {
  enableDarkMode();
}

toggleBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "on") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});




