document.getElementById("Transfer-btn").addEventListener("click",function(){

    const cashOutNumber = getValueFormInput("Transfer-number");
if(cashOutNumber.length !=11){
alert("Invalid Agent number")
return;
}


    const cashOutAmount = getValueFormInput("Transfer-amount")

    const currentBalance = getBalance()


const newBalance = currentBalance - Number(cashOutAmount);
console.log(newBalance);

if(newBalance < 0){
    alert("Invalid Amount")
    return;
}

const pin = getValueFormInput("Transfer-pin");

if(pin === "2350"){
    alert("Transfer Successfull");
    setBalance(newBalance);
    // console.log("newBalance",newBalance);
}
else{
    alert("Invalid Pin")
    return;
}




})






