document
  .getElementById("button-withdrow").addEventListener("click", function () {
    // console.log('button clicked ');
    const withdrowButton = document.getElementById("withdrow-field");
    const withdrowAmount = parseFloat(withdrowButton.value);

    withdrowButton.value = "";
    if(isNaN(withdrowAmount)){
        alert('please enter a valid amount');
        return;
    }

    const withdrow = document.getElementById("withdrow-amount");
    const preTotal = document.getElementById("total-balance");

    if(withdrowAmount>parseFloat(preTotal.innerText)){
        alert('Not enough balance');
        return;
        
    }


    const totalWithdrow =parseFloat(withdrowAmount) + parseFloat(withdrow.innerText);
    const total = parseFloat(preTotal.innerText) - (withdrowAmount);
    const nextTotal = parseFloat(preTotal.innerText) - parseFloat(withdrowAmount);
    withdrow.innerText = parseFloat(totalWithdrow);
    preTotal.innerText = parseFloat(total);

    
  });
