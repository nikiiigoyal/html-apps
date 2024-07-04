const slides = document.querySelectorAll('.slide');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

let currentSlide = 0;

//displaying only one slide at a time
function slideshow() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active'); // Removing "active" class from all slides:
        console.log(slides)
      }
      slides[currentSlide].classList.add('active'); //adding active class
      console.log(slides)
    }
      // Show the first slide initially
         slideshow(currentSlide);



previousButton.addEventListener("click",function() {

    if (currentSlide === slides.length - 1) {
        currentSlide = 0; // Set to first slide if on last slide
      } else {
        currentSlide++;
    }
})
 nextButton.addEventListener("click",function() {
    currentSlide--
    currentSlide = currentSlide < 0 ? slides.length - 1 : currentSlide;
  slideshow(currentSlide);
})


