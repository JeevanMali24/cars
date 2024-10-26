document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const carName = document.getElementById("carName").value;
    const messageDiv = document.getElementById("message");

    if (carName) {
        messageDiv.textContent = `Thank you for submitting the car name: ${carName}`;
        messageDiv.style.color = "green";
    } else {
        messageDiv.textContent = "Please enter a car name.";
        messageDiv.style.color = "red";
    }

    // Clear the input field
    document.getElementById("carName").value = "";
});
