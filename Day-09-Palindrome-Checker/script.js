const text = document.getElementById("text");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click",()=>{
    if (text.value === "") {
        alert("Please Enter Some Text");
        return;
    }
    const original = text.value
        .toLowerCase()
        .replace(/[^a-z0-9]/g,"");

    const reversed = original
        .split("")
        .reverse()
        .join("");

    if(original===reversed){

        result.textContent = "✅ It is a Palindrome";

    }

    else{

        result.textContent = "❌ It is not a Palindrome";

    }

});
