document.getElementById('button-deposit').addEventListener('click', function(){
   const depositAmount = document.getElementById('deposit-field');
   const depositAmountIs= parseFloat(depositAmount.value);

const deposit= document.getElementById('deposit-amount');
const total= document.getElementById('total-balance');
 
const depositTotal =parseFloat(deposit.innerText)+depositAmountIs;
const wholeTotal=parseFloat(total.innerText)+depositAmountIs;
deposit.innerText=parseFloat(depositTotal);
total.innerText= parseFloat(wholeTotal);
depositAmount.value='';
})