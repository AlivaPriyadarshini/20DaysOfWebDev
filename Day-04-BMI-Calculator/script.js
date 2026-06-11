const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btn = document.getElementById("btn");

const result = document.getElementById("result");
const status = document.getElementById("status");

btn.addEventListener("click",()=>{

    if (height.value === "" || weight.value === "") {
        alert("Please fill all fields!");
        return;
    }

    const h = Number(height.value)/100;
    const w = Number(weight.value);

    const bmi = (w/(h*h)).toFixed(2);

    result.textContent = `Your BMI : ${bmi}`;

    if(bmi<18.5){

        status.textContent = "🔵 Underweight";

    }

    else if(bmi>=18.5 && bmi<24.9){

        status.textContent = "🟢 Normal Weight";

    }

    else if(bmi>=25 && bmi<29.9){

        status.textContent = "🟠 Overweight";

    }

    else{

        status.textContent = "🔴 Obese";

    }

});