let themeIcon = document.querySelector("#theme-icon");

themeIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.src = "mainimages/darkmode.jpg";
  } else {
    themeIcon.src = "mainimages/lightmode.jpg";
  }
};
// hamburgen menu functionality

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navList = document.getElementById('nav-list');

  hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('show');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function() {
      hamburgerMenu.classList.remove('active');
      navList.classList.remove('show');
    });
  });
});
