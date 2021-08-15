// Handle Deposite Button

document.getElementById('deposit-button').addEventListener('click', function () {
    // Add Deposite and Update
    const depositText = document.getElementById('deposit-input').value;
    const depositAmount = parseFloat(depositText);

    const depositeCurrent = document.getElementById('deposite-current').innerText;
    const depositTotal = parseFloat(depositeCurrent);

    let total = depositAmount + depositTotal;

    const newDep = document.getElementById('deposite-current');
    newDep.innerText = total;

    // clear the Input
    document.getElementById('deposit-input').value = '';

    // Update Account Balance
    const balancetext = document.getElementById('balance-current');
    const balancetextNum = balancetext.innerText;
    const balanceAmount = parseFloat(balancetextNum);
    console.log(balanceAmount);

    const balanceTotalAmount = balanceAmount + depositAmount;
    console.log(balanceTotalAmount);

    balancetext.innerText = balanceTotalAmount;

})

document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log("button clicked");
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputValue);
    console.log(withdrawAmount);

    const withdrawCurrent = document.getElementById('withdraw-current');
    const withdrawCurrentValue = withdrawCurrent.innerText;
    const withdrawCurrentAmount = parseFloat(withdrawCurrentValue);
    console.log(withdrawCurrentAmount);

    const totalWithdrawAmount = withdrawAmount + withdrawCurrentAmount;

    withdrawCurrent.innerText = totalWithdrawAmount;

    // Update Balance
    const balancetext = document.getElementById('balance-current');
    const balancetextNum = balancetext.innerText;
    const balanceAmount = parseFloat(balancetextNum);
    const finalBalance = balanceAmount - totalWithdrawAmount;

    balancetext.innerText = finalBalance;

    document.getElementById('withdraw-input').value = '';


})