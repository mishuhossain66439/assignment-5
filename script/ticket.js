function apply(){
    getApplybuttonshow('Apply-Success');
    getSuccessButtonhide('Seat-plan'); 
}

function continueDate(){
    getSuccessButtonhide('Apply-Success');
    getApplybuttonshow('Seat-plan'); 
}

function calculateSum() {
    // Get the values of the input fields
    const amount1 = parseFloat(document.getElementById("amount1").value);
    const amount2 = parseFloat(document.getElementById("amount2").value);
    
    // Calculate the sum
    const sum = amount1 + amount2;

    // Display the result
    document.getElementById("Result").textContent = sum;
  }

