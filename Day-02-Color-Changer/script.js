const box = document.getElementById("color-box");
const code = document.getElementById("code");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const copyBtn = document.getElementById("copyBtn");

function randomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0 ; i <6 ; i++ ){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function generateGradient(){
    const color1 = randomColor();
    const color2 = randomColor();

    const degree = Math.floor(Math.random()*361);
    
    const gradient = `linear-gradient(${degree}deg,${color1},${color2})`;

    return gradient;
    
}
btn1.addEventListener("click",()=>{
    const newColor = randomColor();
    document.body.style.background = newColor;
    box.style.background = newColor;
    code.textContent = newColor;
});

btn2.addEventListener("click",()=>{
    const gradient = generateGradient();
    document.body.style.background = gradient;
    box.style.background = gradient;
    code.textContent = gradient;
});

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.textContent);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(()=>{
        copyBtn.textContent = "Copy Code";

    },1500);
});
