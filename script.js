//login button event handler
const loginBtn = document.getElementById('login').addEventListener('click', ()=>{
    const loginArea = document.getElementById('login-area');
    const transactionArea = document.getElementById('transaction-area');
    loginArea.style.display = 'none'
    transactionArea.style.display = 'block'
})

//deposit button event handler
const depositBtn = document.getElementById('deposit-btn').addEventListener('click', ()=>{
    const depositMoney = document.getElementById('depositMoney').value; //string
    const depositAmount = parseFloat(depositMoney);
    const oldValue = document.getElementById('current-deposit').innerText;
    const oldValueAmount = parseFloat(oldValue);
    const totalDeposit = depositAmount + oldValueAmount;
    document.getElementById('current-deposit').innerText = totalDeposit;
    

    const oldCurrentBalance = document.getElementById('current-balance').innerText;
    const oldValueBalanceAmount = parseFloat(oldCurrentBalance);
    const totalBalance = depositAmount + oldValueBalanceAmount;
    document.getElementById('current-balance').innerText = totalBalance;


    document.getElementById('depositMoney').value = '';
})