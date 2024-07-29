const getMealBtn = document.querySelector("#get-meal-btn");
const mealContainer = document.querySelector("#meal");
const mealsApi = "https://www.themealdb.com/api/json/v1/1/random.php";

getMealBtn.addEventListener("click", getRandomMeals);

async function getRandomMeals() {
  const response = await fetch(mealsApi);
  const data = await response.json();
  console.log(data);
  const meal = data.meals[0];
  const title = meal.strMeal;
  const Area = meal.strArea;
  const Category = meal.strCategory;
  const Tags = meal.strTags;
  const Video = meal.strYoutube;

  const Instruction = meal.strInstructions;
  const Image = meal.strMealThumb;

  console.log(title);
  console.log(Area);
  console.log(Category);
  console.log(Tags);
  console.log(Video);
  console.log(Instruction);
  console.log(Image);

  const ingredientsWithMeasure = [];
  for (let i = 0; i <= 15; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredientsWithMeasure.push(
        `${ingredient} :${measure} ` // Default to 'to taste' if measure is null
      );
    } else {
      `"ingredient":${ingredient}
      "measure": "to taste"`;
    }
    console.log(ingredientsWithMeasure);
  }

  const newInnerHTML = `<div class="rows">
  <div class= "columns five">
  <img src = ${Image} alt="meal image">
  <p> Category: ${Category}</p>
  <p> Area: ${Area}</p>
  <p> Tags: ${Tags}</p>
  <h4 class="ingre-title">Ingredients</h4>
  <ul>
  ${ingredientsWithMeasure
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("")}
  </ul>
  </div>
  <div class="columns seven">
   <h4>${title}</h4>
   <p>${Instruction}</p>
  </div>
  </div>
  
  
   <div class="row-video">
 <h4>Video Recipe</h4>
  <div class="video-wrapper">
  
     <iframe width="700" height="450" src="https://www.youtube.com/embed/${meal.strYoutube.slice(
       -11
     )}"
     "frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
 </iframe>
  
  </div>
  
  </div.`;

  mealContainer.innerHTML = newInnerHTML;

  if (Tags === null) {
    ("no Tags");
  }
  if (Video) {
    mealContainer.innerHTML = newInnerHTML.replace("${Video}", Video);
  }
}
