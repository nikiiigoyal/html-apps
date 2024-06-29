const previousBtn = document.querySelector("#previous")
const nextBtn = document.querySelector("#next")
let imageNumber =  1
function slideshow() {
    const slides = document.querySelectorAll(".slide") //getting all ths slides by common class name
    slides[imageNumber].style.display = "block"


console.log(slides)
}
slideshow()
function controller(x) {
 imageNumber = imageNumber + x;
}

previousBtn.addEventListener("click",function() {
    controller(-1)
    
})
 nextBtn.addEventListener("click",function() {
    controller(1)
})

