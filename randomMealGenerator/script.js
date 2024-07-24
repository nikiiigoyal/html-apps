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

  const newInnerHTML = `<div class="row">
  <div class= "columns five">
  <img src = ${Image} alt="meal image">
  <p> Category: ${Category}</p>
  <p> Area: ${Area}</p>
  <p> Tags: ${Tags}</p>
  <h4>Ingredients</h4>
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
  <div class="row">
  <h4>Video Recipe</h4>
  <div class="video-wrapper">
  
  <video width="320" height="240" src="${Video}" controls>
  <source src="${Video}">
   
    Your browser does not support the video tag.
</video>
  </div>
  </div>`;

  mealContainer.innerHTML = newInnerHTML;

  //   const mealDiv = document.createElement("div");
  //   mealDiv.classList.add("meal-div");

  //   const leftColumnDiv = document.createElement("div");
  //   leftColumnDiv.classList.add("left-column");

  //   const mealImage = document.createElement("img");
  //   mealImage.src = Image;
  //   mealImage.alt = "meal-image";
  //   mealImage.classList.add("meal-image");

  //   const mealCategory = document.createElement("h4");
  //   mealCategory.textContent = `Category: ${Category}`;
  //   mealCategory.classList.add("meal-category");

  //   const mealArea = document.createElement("h4");
  //   mealArea.textContent = `Area: ${Area}`;
  //   mealArea.classList.add("meal-area");

  //   const ingredientHeading = document.createElement("h5");
  //   ingredientHeading.textContent = "Ingredients";
  //   const ingredients = document.createElement("ul");
  //   const li = document.createElement("li");
  //   ingredients.appendChild(li);
  //   li.textContent = ingredientsWithMeasure;
  //   ingredients.classList.add("ingredients");
  //   ingredientHeading.appendChild(ingredients);

  //   // const ingredientsString = ingredientsWithMeasure
  //   //   .map((item) => `${item.measure} ${item.ingredient}`)
  //   //   .join(", ");

  //   // const ingredientsElement = document.createElement("p");
  //   // ingredientsElement.textContent = ingredientsString;

  //   // ingredients.appendChild(ingredientsElement);

  //   const rightColumnDiv = document.createElement("div");
  //   rightColumnDiv.classList.add("right-column");

  //   const mealTags = document.createElement("h4");
  //   mealTags.textContent = Tags;
  //   mealTags.classList.add("meal-tags");

  //   const mealInstructions = document.createElement("p");
  //   mealInstructions.textContent = Instruction;
  //   mealInstructions.classList.add("instruction");

  //   const videoDiv = document.createElement("div");
  //   const vid = document.createElement("video");
  //   vid.src = Video;
  //   vid.alt = "video of a meal";
  //   vid.classList.add("video");

  //   videoDiv.appendChild(vid);

  //   rightColumnDiv.appendChild(mealTags);
  //   rightColumnDiv.appendChild(mealInstructions);

  //   leftColumnDiv.appendChild(ingredientHeading);

  //   leftColumnDiv.appendChild(ingredients);

  //   leftColumnDiv.appendChild(mealImage);
  //   leftColumnDiv.appendChild(mealCategory);
  //   leftColumnDiv.appendChild(mealArea);
  //   leftColumnDiv.appendChild(ingredientHeading);

  //   mealDiv.appendChild(rightColumnDiv);
  //   mealDiv.appendChild(videoDiv);
  //   mealDiv.appendChild(leftColumnDiv);
  //   mealContainer.appendChild(mealDiv);
  // }
}
