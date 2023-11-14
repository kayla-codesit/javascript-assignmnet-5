    /* Form Input*/
    var balance = calcForm.balance.value;
    var annualRate = calcForm.interest.value;
    var months = calcForm.intDuration.value;
    var error = "All fields must be more than 0 and cannot be blank.";
    var color;
    
function submitData() {
    
    if (isNaN(balance) || isNaN(annualRate) || isNaN(months)) {
        updateDOM("error", "red");
        return false;
    } 
    else if (balance <= 0 || annualRate <= 0 || months <= 0) {
        updateDOM("error", "red");
        return false;
    }
     else {
        updateDOM("valid", "green");
        computeFutureValue(balance, annualRate, months);
    }
}

function updateDOM(value, color) {
    /*Error Output */

        if (value === "error") {
            document.getElementById("futureValue").innerHTML = error;
            document.getElementById("futureValue").style.color = "red";
        } else {
            document.getElementById("futureValue").style.color = "green";
            computeFutureValue(balance, annualRate, months);
        }
    
}

function computeFutureValue(balance, annualRate, months) {
        while (i=0, i <= months, i++) {
            x = ((balance * annualRate * months)/100);
        } 
        x = document.getElementById("futureValue").innerHTML;
}