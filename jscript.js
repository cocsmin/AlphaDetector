function handleResponse(answer) {
    const messageElement = document.getElementById("response-message");
  
    if (answer === "Yes") {
      messageElement.textContent = "Thank you for your feedback!";
      messageElement.style.color = "#4CAF50"; // Green color for positive response
    } else {
      messageElement.textContent = "We're sorry to hear that. We'll work on improving.";
      messageElement.style.color = "#f44336"; // Red color for negative response
    }
  }
  