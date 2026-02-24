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

function getTransactions() {
    const stored = localStorage.getItem("payoo_transactions");
    return stored ? JSON.parse(stored) : [];
}

function addTransactionToHistory(type, amount, detail) {
    const transactions = getTransactions();
    const now = new Date();
    const dateStr = now.toLocaleString("en-US", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit"
    });
    transactions.unshift({
        type,
        amount,
        date: dateStr,
        from: amount > 0 ? detail : undefined,
        to: amount < 0 && (type === "Cashout" || type === "Transfer") ? detail : undefined,
        bill: type === "Pay Bill" ? detail : undefined,
        coupon: type === "Get Bonus" ? detail : undefined
    });
    localStorage.setItem("payoo_transactions", JSON.stringify(transactions));
    if (typeof renderTransactions === "function") renderTransactions();
}













function showOnly (id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const transfer = document.getElementById("transfer");
    const getBonus = document.getElementById("getBonus");
    const payBil = document.getElementById("payBill");
const transactions = document.getElementById("transactions");

    // console.log(`Add Money- ${addMoney}, CashOut ${cashOut}`);
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transfer.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBil.classList.add("hidden");
transactions.classList.add("hidden");

    console.log(id);

    const selected =  document.getElementById(id);
    console.log(selected);
    selected.classList.remove("hidden")

}