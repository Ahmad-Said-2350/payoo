document.getElementById("add-money-btn").addEventListener("click",function (){

const bankAccount = getValueFormInput("add-money-bank");
if(bankAccount === "Select A Bank"){
    alert("please Select A Bank ");
    return;
}

const accno = getValueFormInput("add-money-number");
if(accno.length != 11){
    alert("Invalid acc no");
    return;
}

const amount = getValueFormInput("add-money-amount");
const currentBalance = getBalance();

const newBalance = currentBalance + Number(amount);

const pin = getValueFormInput("add-money-pin");
if(pin === "2350"){
    alert(`Add Money Success form${bankAccount} 
        at ${new Date()}`);
    setBalance(newBalance);
}
else{
    alert("Invalid pin");
    return;
}

})