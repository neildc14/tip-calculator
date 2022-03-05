var billCost = document.getElementById('billCost');

var fivePercent = document.getElementById('fivePercent');
var tenPercent = document.getElementById('tenPercent');
var fifteenPercent = document.getElementById('fifteenPercent');
var twentyFivePercent = document.getElementById('twentyFivePercent');
var fiftyPercent = document.getElementById('fiftyPercent');

var numberInput = document.getElementById('numberInput');
var zeroWarning = document.getElementById('zeroWarning');

var tipAmount = document.getElementById('tipAmount');
var totalAmount = document.getElementById('totalAmount');

var reset = document.getElementById('reset');



fivePercent.addEventListener('click', tip);
tenPercent.addEventListener('click', tip);
fifteenPercent.addEventListener('click', tip);
twentyFivePercent.addEventListener('click', tip);
fiftyPercent.addEventListener('click', tip);



function tip(){
    if(numberInput.value === ""){
        zeroWarning.style.cssText = "display: block";
        numberInput.style.cssText = "border-color: red;"
    } else {
        zeroWarning.style.cssText = "display: none";
        numberInput.style.cssText = "border-color: none;"
    }

    let tipValue = 
    (parseFloat(billCost.value) * 
    parseFloat(this.value)) / 
    parseFloat(numberInput.value);
    tipAmount.innerHTML = tipValue.toFixed(2);

    totalAmount.innerHTML = (parseFloat(billCost.value) + tipValue).toFixed(2);
  
}

reset.addEventListener('click', function(){
    billCost .value = "";
    fivePercent.value = "";
    tenPercent.value = "";
    fifteenPercent.value = "";
    twentyFivePercent.value = "";
    numberInput.value = "";

})



