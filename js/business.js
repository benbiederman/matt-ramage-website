const prevVideo = document.querySelector(".prev-video");
const nextVideo = document.querySelector(".next-video");
const videos = document.querySelectorAll(".video");

let activeVideo = 0;

window.addEventListener("load", function () {
  setActiveVideos(window.innerWidth);
});

window.addEventListener("resize", function () {
  setActiveVideos(window.innerWidth);
});

prevVideo.addEventListener("click", function () {
  changeActiveVideo("prev");
});

nextVideo.addEventListener("click", function () {
  changeActiveVideo("next");
});

function setActiveVideos(width) {
  if (width < 768) {
    videos.forEach((video) => {
      if (video.classList.contains("active-video")) {
        video.classList.remove("active-video");
      }
    });
    videos[activeVideo].classList.add("active-video");
  } else {
    videos.forEach((video) => {
      video.classList.add("active-video");
    });
  }
}

function changeActiveVideo(navigation) {
  videos[activeVideo].classList.remove("active-video");

  if (navigation === "prev" && activeVideo === 0) {
    activeVideo = videos.length - 1;
  } else if (navigation === "prev") {
    activeVideo--;
  }

  if (navigation === "next" && activeVideo === videos.length - 1) {
    activeVideo = 0;
  } else if (navigation === "next") {
    activeVideo++;
  }

  videos[activeVideo].classList.add("active-video");
}
