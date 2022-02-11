const totalDeposit = document.getElementById('total_deposit');

const totalWithdraw = document.getElementById('total_withdraw');

const totalBalance = document.getElementById('total_balance');

const todayDeposit = document.getElementById('today_deposit');
const depositInput = document.getElementById('deposit_input');
const depositBtn = document.getElementById('deposit_btn');

const todayWithdraw = document.getElementById('today_withdraw');
const withdrawInput = document.getElementById('withdraw_input');
const withdrawBtn = document.getElementById('withdraw_btn');

depositBtn.addEventListener('click', function () {
  if (depositInput.value == '' || depositInput.value <= 0) {
    alert('সঠিক ইনপুট দিন')
  } else {
    todayDeposit.innerText = parseFloat(todayDeposit.innerText) + parseFloat(depositInput.value);
    totalDeposit.innerText = parseFloat(totalDeposit.innerText) + parseFloat(depositInput.value);
    totalBalance.innerText = parseFloat(totalBalance.innerText) + parseFloat(depositInput.value);
    depositInput.value = '';
  }
})

withdrawBtn.addEventListener('click', function () {
  if (withdrawInput.value == '' || withdrawInput.value <= 0 || parseFloat(totalBalance.innerText) < parseFloat(withdrawInput.value)) {
    alert('সঠিক ইনপুট দিন')
  } else {
    todayWithdraw.innerText = parseFloat(todayWithdraw.innerText) + parseFloat(withdrawInput.value);
    totalBalance.innerText = totalBalance.innerText - withdrawInput.value;
    totalWithdraw.innerText = parseFloat(totalWithdraw.innerText) + parseFloat(withdrawInput.value);
    withdrawInput.value = '';
  }
})