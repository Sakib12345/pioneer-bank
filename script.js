//login button event handler
const loginBtn = document.getElementById('login').addEventListener('click', ()=>{
    const loginArea = document.getElementById('login-area');
    const transactionArea = document.getElementById('transaction-area');
    loginArea.style.display = 'none'
    transactionArea.style.display = 'block'
})

//deposit button event handler
    const depositBtn = document.getElementById('deposit-btn')
    .addEventListener('click', ()=>{
    const depositAmount = getInputNumbers('depositMoney');
    
//deposit add
    updateSpanText('current-deposit', depositAmount)

//balance add
    updateSpanText('current-balance', depositAmount);

//clear input text after submission
    document.getElementById('depositMoney').value = '';
})

    const withDrawBtn = document.getElementById('withDrawBtn').addEventListener(
        'click', ()=>{
            const withDrawValue = getInputNumbers('withDraw')

            //span  tag value
            updateSpanText('withdraw-balance', withDrawValue);
        }
    )


function getInputNumbers(id) {
    const amount = document.getElementById(id).value; //string
    const amountValue = parseFloat(amount);
    return amountValue;
}

function updateSpanText(id, depositAmount){
    const oldCurrentBalance = document.getElementById(id).innerText;
    const oldValueBalanceAmount = parseFloat(oldCurrentBalance);
    const totalBalance = depositAmount + oldValueBalanceAmount;
    document.getElementById(id).innerText = totalBalance;
}