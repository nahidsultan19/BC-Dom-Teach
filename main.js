document.getElementById('btn-deposit').addEventListener('click', function () { 
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;

    const depositAmount = document.getElementById('deposit-amount');

    const preDepositAmount = depositAmount.innerText;
    const newDepositAmount = parseFloat(preDepositAmount) + parseFloat(depositValue);

    depositAmount.innerText = newDepositAmount;

    depositInput.value = '';

    // balance

    const balance = document.getElementById('total-balance');
    const preBalance = balance.innerText;

    const newBalance = parseFloat(preBalance) + parseFloat(depositValue);

    balance.innerText = newBalance;

});


//handle withdraw

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;

    const withdrawAmount = document.getElementById('withdraw-amount');
    const preWithDrawAmount = withdrawAmount.innerText;

    const newWithDrawAmount = parseFloat(withdrawValue) + parseFloat(preWithDrawAmount);

    withdrawAmount.innerText = newWithDrawAmount;

    // clear input field

    withdrawInput.value = '';

    // balance 

    const balance = document.getElementById('total-balance');
    const preBalance = balance.innerText;

    const newBalance = parseFloat(preBalance) - parseFloat(withdrawValue);
    balance.innerText = newBalance;
    

 });