const display = document.getElementById("display");

function appendValue(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function deleteLast(){

    display.value = display.value.slice(0,-1);

}

function calculate(){

    if(display.value === ""){

        alert("Enter a calculation!");

        return;

    }

    try{

        display.value = eval(display.value);

    }

    catch{

        alert("Invalid Expression");

    }

}