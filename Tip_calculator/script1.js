const btnEl = document.getElementById("Calculator");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");


function CalculateTotal(){
   const billValue = billInput.value;
   const tipValue = tipInput.value;
   const totalValue = billValue *(1+(tipValue/100));
   totalSpan.innerText = totalValue.toFixed(2);
   
}

btnEl.addEventListener("click", CalculateTotal);
