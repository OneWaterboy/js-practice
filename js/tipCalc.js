

// Pull amounts for calculations

function calculate () {
    let bill = parseInt(document.getElementById("billTotal").value);
    let tip = parseFloat(document.getElementById("serviceQuality").value);
    let split = parseInt(document.getElementById("splitBill").value);

        //validate that inputs exist
        if ( bill === 0 || tip === 0) {
            alert("Please Give Bill Information")
            return;
        }
        //calculate the tip per person
        var totalTip = (bill / split) * tip;
        totalTip.toFixed(2);
        document.getElementById("tipEach").innerHTML = `$${totalTip}`
        //calculate total bill per person
        var billEach = bill / split;
        billEach = billEach.toFixed(2);
        var totalCost = billEach;
        document.getElementById("totalEach").innerHTML = `$${totalCost}`
}

document.getElementById("calculateBill").onclick = function () {
    calculate()
}