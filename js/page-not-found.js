const cta = document.querySelector(".page-not-found-cta");
const homepageBtn = document.querySelector(".homepage-btn");

homepageBtn.addEventListener("click", () => {
  window.location.href = "/";
});

cta.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    window.location.href = "/";
  }
});
