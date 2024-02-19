function apply(){
    getApplybuttonshow('Apply-Success');
    getSuccessButtonhide('Seat-plan');
    document.getElementById('Name-form').value='';
    document.getElementById('Phone-form').value='';
    document.getElementById('Email-form').value='';  
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




  document.addEventListener('seat-number', function() {
    const seats = document.querySelectorAll('.seat');
    const totalAmountDisplay = document.getElementById('Result');
    let totalAmount = 0;

    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            // Toggle seat selection
            seat.classList.toggle('selected');
            
            // Update total amount
            if (seat.classList.contains('selected')) {
                totalAmount += 550; // Change this amount as needed
            } else {
                totalAmount -= 0; // Change this amount as needed
            }
            totalAmountDisplay.textContent = totalAmount;

            // Change seat background color
            if (seat.classList.contains('selected')) {
                seat.style.backgroundColor = 'bg-green-500'; // Change to desired color
            } else {
                seat.style.backgroundColor = ''; // Reset to default color
            }
        });
    });
})
