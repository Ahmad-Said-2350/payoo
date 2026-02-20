

document.getElementById("CashOut-btn").addEventListener("click",function(){

    const cashOutNumber = getValueFormInput("CashOut-number");
if(cashOutNumber.length !=11){
alert("Invalid Agent number")
return;
}


    const cashOutAmount = getValueFormInput("CashOut-amount")

    const currentBalance = getBalance()


const newBalance = currentBalance - Number(cashOutAmount);
console.log(newBalance);

if(newBalance < 0){
    alert("Invalid Amount")
    return;
}

const pin = getValueFormInput("CashOut-pin");

if(pin === "2350"){
    alert("cashOut Successfull");
    setBalance(newBalance);
    // console.log("newBalance",newBalance);
}
else{
    alert("Invalid Pin")
    return;
}




})








// document.getElementById("CashOut-btn").addEventListener("click",function(){

//     const cashOutNumberInput = document.getElementById("CashOut-number");
//     const cashOutNumber = cashOutNumberInput.value;
//     console.log(cashOutNumber);

//     if(cashOutNumber.length !=11){
//         alert("Invalid Agent number")
//         return;
//     }


// const cashOutAmountInput = document.getElementById("CashOut-amount");
// const cashOutAmount = cashOutAmountInput.value;
// console.log(cashOutAmount);

// const balanceElement = document.getElementById("balance");
// const balance = balanceElement.innerText;
// console.log(balance);

// const newBalance = Number(balance) - Number(cashOutAmount);

// if(newBalance < 0){
//     alert("Invalid Amount")
//     return;
// }


// const cashOutPinInput = document.getElementById("CashOut-pin");
// const pin = cashOutPinInput.value;
// console.log(pin);

// if(pin === "2350"){
//     alert("cashOut Successfull");
//     console.log("newBalance",newBalance);
//     balanceElement.innerText = newBalance;

// }
// else{
//     alert("Invalid Pin")
//     return;
// }




// })