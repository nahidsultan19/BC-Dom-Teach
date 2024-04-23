
function getInput(value) {
    const inputField = document.getElementById(value);
    const inputValue = parseFloat(inputField.value);

    // clear input field
    inputField.value = '';

    return inputValue;
};

function getElement(element) {
    const elementAmount = document.getElementById(element);
    const elementValue = parseFloat(elementAmount.innerText);
    return elementValue;
}

function getAmount(element, value) {
    const amountElement = document.getElementById(element);
    amountElement.innerText = value;
};



document.getElementById('btn-deposit').addEventListener('click', function () {
    
    // deposit
    const newDeposit = getInput('deposit-input');

    const prevDeposit = getElement('deposit-amount');

    const newDepositTotal = prevDeposit + newDeposit;

    getAmount('deposit-amount', newDepositTotal);


    // balance total

    const prevBalance = getElement('total-balance');

    const newBalanceTotal = prevBalance + newDeposit;

    getAmount('total-balance', newBalanceTotal);




});
 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // withdraw
    const newWithdraw = getInput('withdraw-input');
    const prevWithdraw = getElement('withdraw-amount');
    const newWithdrawTotal = prevWithdraw + newWithdraw;
    getAmount('withdraw-amount', newWithdrawTotal);

    // balance
    const prevBalance = getElement('total-balance');
    const newBalanceTotal = prevBalance - newWithdraw;

    getAmount('total-balance', newBalanceTotal);
 });