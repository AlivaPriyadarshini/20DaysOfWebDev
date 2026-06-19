const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

generateBtn.addEventListener("click", () => {
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        newPassword += chars[randomIndex];
    }
    password.value = newPassword;
});

copyBtn.addEventListener("click", () => {
    if (password.value === "") {
        alert("Generate a password first!");
        return;
    }
    navigator.clipboard.writeText(password.value);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(()=>{
        copyBtn.textContent = "Copy Password";
    },1500);
})

