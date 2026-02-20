document.getElementById("pay-money-btn").addEventListener("click",function (){

const payAccount = getValueFormInput("pay-select");
if(payAccount === "Select back"){
    alert("please Select A Bank ");
    return;
}

const accno = getValueFormInput("pay-money-number");
if(accno.length != 11){
    alert("Invalid pay");
    return;
}

const amount = getValueFormInput("pay-money-amount");
const currentBalance = getBalance();

const newBalance = currentBalance - Number(amount);

const pin = getValueFormInput("pay-money-pin");
if(pin === "2350"){
    alert(`pay Money Success form${payAccount} 
        at ${new Date()}`);
    setBalance(newBalance);
}
else{
    alert("Invalid pin");
    return;
}

})