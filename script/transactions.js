function renderTransactions() {
    const list = document.getElementById("transaction-list");
    if (!list) return;

    const transactions = getTransactions();
    if (transactions.length === 0) {
        list.innerHTML = '<p class="text-neutral/70 text-center py-8">No transactions yet</p>';
        return;
    }

    list.innerHTML = transactions.map((t) => {
        const isAdd = t.amount > 0;
        const colorClass = isAdd ? "text-success" : "text-error";
        const sign = isAdd ? "+" : "";
        const detail = t.from || t.to || t.bill || t.coupon || "";
        return `
            <li class="flex justify-between items-center p-3 bg-base-200 rounded-xl">
                <div>
                    <p class="font-semibold">${t.type}</p>
                    <p class="text-sm text-neutral/70">${detail} • ${t.date}</p>
                </div>
                <span class="font-bold ${colorClass}">${sign}$${Math.abs(t.amount)}</span>
            </li>
        `;
    }).join("");
}

document.addEventListener("DOMContentLoaded", renderTransactions);