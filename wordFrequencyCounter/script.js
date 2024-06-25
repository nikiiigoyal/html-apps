
const textBox = document.querySelector("#textbox")
const countButton = document.querySelector("#countButton")

textBox.addEventListener("input", function () {
    if (textBox.value === "") {
        alert("Please enter text");
    } else {
        const inputTextValue = textBox.value;
        console.log("Input Text:", inputTextValue);
    }
});
