    /* Form Input*/
    let balance = calcForm.balance.value;
    let annualRate = calcForm.interest.value;
    let months = calcForm.intDuration.value;
    let error = "All fields must be more than 0 and cannot be blank.";
    let valid;
    
function submitData() {
    
    
    if (isNaN(balance) || isNaN(annualRate) || isNaN(months)) {
        updateDOM(error, "red");
        return false;
    } 
    else if (balance <= 0 || annualRate <= 0 || months <= 0) {
        updateDOM(error, "red");
        return false;
    }
     else {
        updateDOM(valid, "green");
        computeFutureValue(balance, annualRate, months);
    }
}

function updateDOM(value, color) {
    /*Error Output */
    let error = "All fields must be more than 0 and cannot be blank.";
    let valid;
    
    color = (document.getElementById("futureValue").style.color);

        if (value === error) {
            document.getElementById("futureValue").innerHTML = error;
            document.getElementById("futureValue").style.color = "red";
        } else if (value === valid) {
            document.getElementById("futureValue").style.color = "green";
            computeFutureValue(balance, annualRate, months);
        }
    
}



function computeFutureValue(balance, annualRate, months) {
    
        while (i=0, i <= months, i++) {
            x = ((balance * annualRate * months)/100);
            
        } 
        document.getElementById("futureValue").innerHTML;
}