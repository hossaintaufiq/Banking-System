document
  .getElementById("button-withdrow").addEventListener("click", function () {
    // console.log('button clicked ');
    const withdrowButton = document.getElementById("withdrow-field");
    const withdrowAmount = parseFloat(withdrowButton.value);

    const withdrow = document.getElementById("withdrow-amount");
    const preTotal = document.getElementById("total-balance");


    const totalWithdrow =parseFloat(withdrowAmount) + parseFloat(withdrow.innerText);
    const total = parseFloat(preTotal.innerText) - (withdrowAmount);
    const nextTotal = parseFloat(preTotal.innerText) - parseFloat(withdrowAmount);
    withdrow.innerText = parseFloat(totalWithdrow);
    preTotal.innerText = parseFloat(total);

    withdrowButton.value = "";
  });