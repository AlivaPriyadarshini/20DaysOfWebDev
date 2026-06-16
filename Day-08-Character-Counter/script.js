const text = document.getElementById("text");

const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const remaining = document.getElementById("remaining");

const maxLength = 200;

text.addEventListener("input",()=>{

    const value = text.value;

    charCount.textContent = value.length;

    remaining.textContent = maxLength - value.length;

    const words = value.trim() === ""
        ? 0
        : value.trim().split(/\s+/).length;

    wordCount.textContent = words;

});