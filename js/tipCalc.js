

// Pull amounts for calculations

function calculate () {
    let bill = parseInt(document.getElementById("billTotal").value);
    let tip = parseInt(document.getElementById("serviceQuality").value);
    let split = parseInt(document.getElementById("splitBill").value);

        //validate that inputs exist
        if ( bill === "" || tip === ""){
            alert("Please Provide Information!")
            return;
        }
        //calculate the tip per person
        var totalTip = (bill / split) * tip;
        totalTip = totalTip.toFixed(2);
        document.getElementById("tipEach").innerHTML = `$${totalTip}`
        //calculate total bill per person
        var totalCost = (bill / split) + totalTip;
        document.getElementById("totalEach").innerHTML = `$${totalCost}`
}

document.getElementById("calculateBill").onclick = function () {
    calculate()
}