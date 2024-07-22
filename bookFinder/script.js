const searchBtn = document.querySelector("#search-btn");
const searchIcon = document.querySelector("#search-icon");
const searchInput = document.querySelector("#search-input");
const bookContainer = document.querySelector("#book-container");
const searchImage = document.querySelector(".search-image");
const booksApi = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

searchIcon.addEventListener("click", searchbooks);

async function searchbooks() {
  const inputValue = searchInput.value;
  console.log(inputValue);
  if (!inputValue) {
    alert("Please enter a search term."); // User-friendly error handling
    return; // Exit function if no input
  }
  if (inputValue) {
    const url = `${booksApi}${inputValue}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    searchImage.style.display = "none";

    const books = data.items;

    for (const book of books) {
      const title = book.volumeInfo.title;
      const authors = book.volumeInfo.authors;
      const categories = book.volumeInfo.categories;
      // const infoLinks = book.volumeInfo.imagelinks.infolinks;
      const description = book.volumeInfo.description;

      let thumbnailUrl;
      if (book.volumeInfo.imageLinks) {
        thumbnailUrl = book.volumeInfo.imageLinks.thumbnail;
        console.log(thumbnailUrl);
      } else {
        thumbnailUrl = "No image available"; // Or a placeholder image URL
      }

      console.log("Title:", title);
      console.log("Authors:", authors);
      console.log(categories);
      // Join author names into a comma-separated string
      console.log(description); // Separator for each book
      const bookItem = document.createElement("div");
      bookItem.classList.add("book-item");

      const bookImage = document.createElement("img");
      bookImage.src = thumbnailUrl;
      bookImage.alt = title || "book-image";
      bookImage.classList.add("book-image");

      const bookInfo = document.createElement("div");
      bookInfo.classList.add("book-info");

      const bookTitle = document.createElement("h3");
      bookTitle.textContent = title;
      bookTitle.classList.add("book-title");

      const bookAuthors = document.createElement("p");
      bookAuthors.textContent = `"Authors:"${authors} `;
      bookAuthors.classList.add("book-authors");

      const bookDescription = document.createElement("p");
      bookDescription.textContent = description.slice(0, 250) + "...";
      bookDescription.classList.add("book-description");

      bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(bookAuthors);
      bookInfo.appendChild(bookDescription);

      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookInfo);

      bookContainer.appendChild(bookItem);
    }
  } else {
    alert("No results Found for your search");
  }
}
