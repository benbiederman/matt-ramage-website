const websiteBtn = document.querySelector(".link-website");
const merchBtn = document.querySelector(".link-merch");
const listenBtn = document.querySelector(".link-listen");
const watchBtn = document.querySelector(".link-watch");
const beerMeBtn = document.querySelector(".link-beer-me");
const baseUrl = window.location.origin;

websiteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  linkOptions("website");
});

merchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  linkOptions("merch");
});

watchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  linkOptions("watch");
});

listenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  linkOptions("listen");
});

beerMeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  linkOptions("beer me");
});

function linkOptions(button) {
  switch (button) {
    case "website":
      window.open(`${baseUrl}/`, "_blank");
      break;
    case "merch":
      window.open(
        "https://www.campechecollective.com/shop/green-bay/mattramage",
        "_blank"
      );
      break;
    case "listen":
      window.open("https://anchor.fm/mattramage", "_blank");
      break;
    case "watch":
      window.open("https://www.youtube.com/c/MattRamage", "_blank");
      break;
    case "beer me":
      window.open(`${baseUrl}/beer-me.html`, "_blank");
      break;
    default:
      break;
  }
}
