let themeIcon = document.querySelector("#theme-icon");

themeIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.src = "mainimages/darkmode.jpg";
  } else {
    themeIcon.src = "mainimages/lightmode.jpg";
  }
};
