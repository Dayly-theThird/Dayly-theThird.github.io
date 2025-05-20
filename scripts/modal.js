
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
setupModal("open4", "modal-container4", "close4");