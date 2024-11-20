// Get references to the form elements
const eventSelect = document.getElementById("event");
const paymentSelect = document.getElementById("payment");
const topicSection = document.getElementById("topicSection");
const topicSelect = document.getElementById("topic");
const confirmationMessage = document.getElementById("confirmationMessage");
const errorMessage = document.getElementById("errorMessage");

// Define payment amounts for each event
const paymentAmounts = {
    "Hackathon": [50, 100, 150],  // Example amounts for Hackathon
    "Workshop": [30, 40],         // Example amounts for Workshop
    "Seminar": [20]               // Example amount for Seminar
};

// Event listener for the event select dropdown
eventSelect.addEventListener("change", function() {
    const selectedEvent = eventSelect.value;
    
    // Show or hide the topic section for Hackathon
    if (selectedEvent === "Hackathon") {
        topicSection.style.display = "block";  // Show Hackathon topics
        updatePaymentOptions("Hackathon");  // Update payment options
    } else {
        topicSection.style.display = "none";  // Hide Hackathon topics
        updatePaymentOptions(selectedEvent);  // Update payment options for other events
    }
});

// Function to update the payment options based on the selected event
function updatePaymentOptions(eventType) {
    // Clear previous payment options
    paymentSelect.innerHTML = '<option value="">Select an event first</option>';

    // Add payment options for the selected event
    if (paymentAmounts[eventType]) {
        paymentAmounts[eventType].forEach(amount => {
            const option = document.createElement("option");
            option.value = amount;
            option.textContent = `$${amount}`;
            paymentSelect.appendChild(option);
        });
    }
}

// Form submit event listener
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const event = eventSelect.value;
    const payment = paymentSelect.value;

    // Simulate sending data to the server (this could involve AJAX or fetching APIs)
    // Display confirmation message after registration
    confirmationMessage.style.display = "block";
    errorMessage.style.display = "none";

    // In a real-world application, you'd also handle form validation and sending the data to a backend (e.g., via AJAX)
});
