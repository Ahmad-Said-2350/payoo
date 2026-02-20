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
    const transfer = document.getElementById("transfer");
    const getBonus = document.getElementById("getBonus");
    const payBil = document.getElementById("payBill");
    // console.log(`Add Money- ${addMoney}, CashOut ${cashOut}`);
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transfer.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBil.classList.add("hidden");
    console.log(id);

    const selected =  document.getElementById(id);
    console.log(selected);
    selected.classList.remove("hidden")

}