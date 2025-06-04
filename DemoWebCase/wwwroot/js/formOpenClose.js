// Form açma/kapatma fonksiyonları
function openModal() {
    document.getElementById("form-container").classList.remove("hidden");
}

function closeModal(event) {
    const modal = document.getElementById("form-container");
    if (event.target === modal || event.type === "click") {
        modal.classList.add("hidden");
    }
}