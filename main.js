document.getElementById('btn-deposit').addEventListener('click', function () { 
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;

    const depositAmount = document.getElementById('deposit-amount');

    depositInput.value = '';

    if (depositValue <= 0) {
        alert('Please enter the amount greater than 0');
        return;
    }else if (isNaN(depositValue)) {
        alert('Please enter valid input');
        return;
    }

    const preDepositAmount = depositAmount.innerText;
    const newDepositAmount = parseFloat(preDepositAmount) + parseFloat(depositValue);

    depositAmount.innerText = newDepositAmount;

    

    

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

    // clear input field

    withdrawInput.value = '';

    // balance 

    const balance = document.getElementById('total-balance');
    const preBalance = balance.innerText;

    // check withdraw value less than total balance and not a number
    if (withdrawValue > preBalance) {
        alert('Please input the value less than total balance');
        return;
    }else if (isNaN(withdrawValue)) {
        alert('Please enter the valid input');
        return;
    }

    const preWithDrawAmount = withdrawAmount.innerText;

    // total withdraw amount
    const newWithDrawAmount = parseFloat(withdrawValue) + parseFloat(preWithDrawAmount);
    withdrawAmount.innerText = newWithDrawAmount;

    

    // balance
    const newBalance = parseFloat(preBalance) - parseFloat(withdrawValue);
    balance.innerText = newBalance;

 });