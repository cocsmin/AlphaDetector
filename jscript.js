function handleResponse(answer) {
    if (answer === "Yes") {
      // Opens a pop-up window for a "Yes" response
      window.open("https://example.com/thank-you", "_blank", "width=400,height=200");
    } else {
      // Opens a pop-up window for a "No" response
      window.open("https://example.com/feedback", "_blank", "width=400,height=200");
    }
  }
  