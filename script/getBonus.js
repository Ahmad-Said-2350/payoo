document.getElementById("bonus-btn").addEventListener("click",function(){
const coupon = getValueFormInput("Bonus-number");

if (coupon === ""){
    alert("Please enter a coupon code");
    return;
}

const currentBalance = getBalance();
let bonusAmount = 0;

// Multiple coupon system
    if(coupon === "SAID100"){
        bonusAmount = 100;
    }
    else if(coupon === "SAYAN50"){
        bonusAmount = 50;
    }
    else if(coupon === "LIFE200"){
        bonusAmount = 200;
    }
    else{
        alert("Invalid Coupon Code");
        return;
    }

    const newBalance = currentBalance + bonusAmount;

    setBalance(newBalance);

    alert(`Bonus Added Successfully! ${bonusAmount}`);

})