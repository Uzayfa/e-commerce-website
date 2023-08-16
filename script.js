// This code is used to add a checkout prompt to the website.
function addCheckoutPrompt() {
    // Create a new element for the checkout prompt.
    var checkoutPrompt = document.createElement("div");
    checkoutPrompt.setAttribute("id", "checkout-prompt");
    // Add the checkout prompt to the DOM.
    document.body.appendChild(checkoutPrompt);
    // Add the text for the checkout prompt.
    var checkoutPromptText = document.createElement("p");
    checkoutPromptText.innerHTML = "Would you like to checkout?";
    checkoutPrompt.appendChild(checkoutPromptText);
    // Add a button to the checkout prompt.
    var checkoutButton = document.createElement("button");
    checkoutButton.innerHTML = "Checkout";
    checkoutButton.addEventListener("click", function() {
      // Redirect the user to the checkout page.
      window.location.href = "checkout.html";
    });
    checkoutPrompt.appendChild(checkoutButton);
  }
  // Add the checkout prompt to the DOM when the page loads.
  window.addEventListener("load", addCheckoutPrompt);