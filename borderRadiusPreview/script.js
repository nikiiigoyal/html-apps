//taking input and storing it in variables
const topLeftInput = document.querySelector("#top-left");
const topRightInput =document.querySelector("#top-right");
const bottomLeftInput = document.querySelector("#bottom-left");
const bottomRightInput = document.querySelector("#bottom-right"); 
const container = document.querySelector(".container");
const writeText = document.querySelector(".box");
const textareavalue = document.querySelector("textarea");

//craeting function to apply input 
function updateBorderRadius() {
  const topLeftRadius = topLeftInput.value + 'px';
  const topRightRadius = topRightInput.value + 'px';
  const bottomLeftRadius = bottomLeftInput.value + 'px';
  const bottomRightRadius = bottomRightInput.value + 'px';

  //applying to container
  container.style.borderRadius = `${topLeftRadius} ${topRightRadius} ${bottomRightRadius} ${bottomLeftRadius}`;
  writeText.style.borderRadius = `${topLeftRadius} ${topRightRadius} ${bottomRightRadius} ${bottomLeftRadius}`;
  textareavalue.value = `top-left-radius ${topLeftRadius} 
  top-right-radius ${topRightRadius} 
  bottom-left-radius ${bottomRightRadius} 
  bottom-right-radius ${bottomLeftRadius}`
}

//changing values and calling function
topLeftInput.addEventListener('input', updateBorderRadius);
topRightInput.addEventListener('input', updateBorderRadius);
bottomLeftInput.addEventListener('input', updateBorderRadius);
bottomRightInput.addEventListener('input', updateBorderRadius);


writeText.addEventListener('click', function() {
 });
 

updateBorderRadius(); // Initial call to set the border radius