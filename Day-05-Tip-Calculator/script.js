const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.getElementById("btn");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");

btn.addEventListener("click",()=>{
    if (!bill.value || !tip.value) {
        alert("Please Fill All The Field");
        return;
    }
    const billValue = Number(bill.value);
    const tipValue = Number(tip.value);

    const tipMoney = (billValue * tipValue)/100;
    const totalBill = billValue + tipMoney;

    tipAmount.textContent = `Tip Amount : ₹${tipMoney.toFixed(2)}`;
    total.textContent = `Total Amount : ₹${totalBill.toFixed(2)}`;
})