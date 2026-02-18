function getValueFormInput (id){
    const input = document.getElementById(id)
    const value = input.value;
    console.log(id,value);
    return value;
}

function getBalance () {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current balance",Number(balance));
    return Number(balance);
}

function setBalance (value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

function showOnly (id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    // console.log(`Add Money- ${addMoney}, CashOut ${cashOut}`);
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    console.log(id);

    const selected =  document.getElementById(id);
    console.log(selected);
    selected.classList.remove("hidden")

}