const homepageHeroBtn = document.querySelector(".homepage-hero button");
const bearsSuckBtn = document.querySelector(".bears-suck button");
const businessBtn = document.querySelector(".business button");

homepageHeroBtn.addEventListener("click", function () {
  window.open("https://www.youtube.com/c/MattRamage", "_blank");
});

bearsSuckBtn.addEventListener("click", function () {
  window.open(
    "https://www.campechecollective.com/shop/p/bears-still-suck-hoodie",
    "_blank"
  );
});

businessBtn.addEventListener("click", function () {
  window.location.href = "/business-inquiries.html";
});
