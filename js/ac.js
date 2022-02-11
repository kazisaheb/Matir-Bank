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
    todayDeposit.innerText = +todayDeposit.innerText + +depositInput.value;
    totalDeposit.innerText = +totalDeposit.innerText + +depositInput.value;
    totalBalance.innerText = +totalBalance.innerText + +depositInput.value;
    depositInput.value = '';
  }
})

withdrawBtn.addEventListener('click', function () {
  if (withdrawInput.value == '' || withdrawInput.value <= 0) {
    alert('সঠিক ইনপুট দিন')
  } else if (+totalBalance.innerText < +withdrawInput.value) {
    alert('পর্যাপ্ত ব্যলান্স নেই')
  } else {
    todayWithdraw.innerText = +todayWithdraw.innerText + +withdrawInput.value;
    totalWithdraw.innerText = +totalWithdraw.innerText + +withdrawInput.value;
    totalBalance.innerText = +totalBalance.innerText - +withdrawInput.value;
    withdrawInput.value = '';
  }
})