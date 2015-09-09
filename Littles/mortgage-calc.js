// JavaScript source code


//formula: c = ( (r*p) / (1 - (Math.pow((1 + r), (-n))))
//@param p float Amount Borrowed
//@param r float interest as percentage
//@param n term in years
function calculateMortgage(p, r, n) {

    var monthlyPayments = null;

    //convert to decimal
    r = percentToDecimal(r);

    // convert years to months
    n = yearsToMonths(n);


    var pmt = (r*p) / (1 - (Math.pow((1 + r), (-n))))
   
    return parseFloat(pmt.toFixed(2));
}

function percentToDecimal(percent) {

    return (percent / 12) / 100;
}

function yearsToMonths(year) {
    return year * 12;
}

function postPayment(payment) {
    var htmlEl = document.getElementById("outMonthly")
    htmlEl.innerText = "$" + payment;
}


var btn = document.getElementById("btnCalculate");
btn.onclick = function () {
    var cost = document.getElementById("inCost").value;

    if (cost < 0) {
        alert("Invalid cost");
        return false;
    }
    if (cost == '') {
        alert("Invalid cost");
        return false;
    }

    var downPayment = document.getElementById("inDown").value;
    if (downPayment < 0) {
        alert("Invalid down payment");
        return false;
    }
    if (downPayment == '') {
        alert("Invalid down payment");
        return false;
    }
    var interest = document.getElementById("inAPR").value;
    if (interest < 0) {
        alert("Invalid Interest");
        return false;
    }
    if (interest == '') {
        alert("Invalid interest");
        return false;
    }
    var term = document.getElementById("inPeriod").value;
    if (term < 0) {
        alert("Invalid Term");
        return false;
    }
    if (term == '') {
        alert("Invalid term");
        return false;
    }
    

    var amountBorrowed = cost - downPayment;

    var pmt = calculateMortgage(amountBorrowed, interest, term);

    postPayment(pmt);
};