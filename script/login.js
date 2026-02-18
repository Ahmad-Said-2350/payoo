
document.getElementById("login-btn").addEventListener("click",function(){

    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value
    // console.log(contactNumber);

    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    // console.log(pin);

    if(contactNumber === "01342179060" && pin === "2350"){
        alert("Login Success")
        window.location.assign("/payoo/home.html")
    }
    else{
        alert("Login Failed")
        return;
    }
})