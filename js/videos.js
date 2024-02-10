function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // for video

  const videos = document.querySelectorAll(".video-content video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
    video.setAttribute("controls", true);
  });
  video.addEventListener("mouseout", () => {
    video.pause();
    video.removeAttribute("controls");
    video.currentTime = 0;
  });
});


const Videos = document.querySelectorAll(".videolist video");

Videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
  });
});

var videolist = document.querySelector(".videolist");

// Add a click event listener to the videolist element
videolist.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video2 = document.getElementById("vid2");

// Add a click event listener to the videolist element
video2.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video3 = document.getElementById("vid3");

// Add a click event listener to the videolist element
video3.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video4 = document.getElementById("vid4");

// Add a click event listener to the videolist element
video4.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video5 = document.getElementById("vid5");

// Add a click event listener to the videolist element
video5.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video6 = document.getElementById("vid6");

// Add a click event listener to the videolist element
video6.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video7 = document.getElementById("vid7");

// Add a click event listener to the videolist element
video7.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video8 = document.getElementById("vid8");

// Add a click event listener to the videolist element
video8.addEventListener("click", function(event) {
  // Get the video element and the new video URL
  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  // Set the new video URL as the src attribute of the video element
  video.setAttribute("src", newVideoUrl);
});

var video9 = document.getElementById("vid9");


video9.addEventListener("click", function(event) {

  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  video.setAttribute("src", newVideoUrl);
});

var video10 = document.getElementById("vid10");


video10.addEventListener("click", function(event) {

  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  video.setAttribute("src", newVideoUrl);
});
var video11 = document.getElementById("vid11");


video11.addEventListener("click", function(event) {

  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  video.setAttribute("src", newVideoUrl);
});

var video12 = document.getElementById("vid12");


video12.addEventListener("click", function(event) {

  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  video.setAttribute("src", newVideoUrl);
});

var video13 = document.getElementById("vid13");


video13.addEventListener("click", function(event) {

  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  video.setAttribute("src", newVideoUrl);
});

var video14 = document.getElementById("vid14");


video14.addEventListener("click", function(event) {

  var video = document.getElementById("myVideo");
  var newVideoUrl = event.target.getAttribute("src");

  video.setAttribute("src", newVideoUrl);
});