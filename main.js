// Reusable function to handle modal behavior
function setupModal(openId, modalId, closeId) {
    const openButton = document.getElementById(openId);
    const modalContainer = document.getElementById(modalId);
    const closeButton = document.getElementById(closeId);

    openButton.addEventListener("click", () => {
        modalContainer.classList.add("show");
    });

    closeButton.addEventListener("click", () => {
        modalContainer.classList.remove("show");
    });
}

// Setup modals for each product
setupModal("open", "modal-container", "close");
setupModal("open2", "modal-container2", "close2");
setupModal("open3", "modal-container3", "close3");

let qty;

document.getElementById("addqty").onclick = function() {
    qty = document.getElementById("qty").value;
    const messageElement = document.getElementById("message");

    if (qty > 0) {
        messageElement.textContent = `You added ${qty} item(s) to the cart.`;
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Please enter a valid quantity.";
        messageElement.style.color = "red";
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
        messageElement.textContent = "";
    }, 3000);
}
document.getElementById("addqty2").onclick = function() {
    qty = document.getElementById("qty2").value;
    const messageElement = document.getElementById("message2");

    if (qty > 0) {
        messageElement.textContent = `You added ${qty} item(s) to the cart.`;
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Please enter a valid quantity.";
        messageElement.style.color = "red";
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
        messageElement.textContent = "";
    }, 3000);
}
document.getElementById("addqty3").onclick = function() {
    qty = document.getElementById("qty3").value;
    const messageElement = document.getElementById("message3");

    if (qty > 0) {
        messageElement.textContent = `You added ${qty} item(s) to the cart.`;
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Please enter a valid quantity.";
        messageElement.style.color = "red";
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
        messageElement.textContent = "";
    }, 3000);
};
