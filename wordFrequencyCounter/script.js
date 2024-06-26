
const textBox = document.querySelector("#textbox")
const wordSpan = document.querySelector("#words")
const characSpan = document.querySelector("#Characters")


textBox.addEventListener("input", function () {
    if (textBox.value === "") {
        alert("Please enter text");
    } else {
        const inputTextValue = textBox.value.trim(); //to not count extra spaces in starting and ending
        const char = inputTextValue.length  //to get length of text
        characSpan.innerHTML = char;
        
        
        let words = inputTextValue.split(" ")
        let cleanSpaces = words.filter(word => word !== "") // to remove extra spaces from between
        wordSpan.innerHTML = cleanSpaces.length;
        
    }

});


