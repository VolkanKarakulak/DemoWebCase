document.querySelectorAll('.package-selector').forEach(select => {
    // Sayfa yüklendiğinde tetikle
    updateCard(select);
    select.addEventListener('change', function () {
        updateCard(this);
    });
});

function updateCard(selectElement) {
    const card = selectElement.closest('.package-card');
    const selectedOption = selectElement.options[selectElement.selectedIndex];

    // Fiyat ve firma bilgisini güncelle
    card.querySelector('.first-price').textContent = selectedOption.dataset.firstprice;

    // Title bilgisini güncelle
    const titleElement = card.querySelector('.package-title');
    if (titleElement) {
        titleElement.textContent = selectedOption.dataset.title;
    }

    // URL'nin dinamik olarak güncellenmesi:
    const detailLink = card.querySelector('.detail-link');
    if (detailLink) {
        const newUrl = "/" + selectedOption.dataset.url; //url başında / olmalı
        detailLink.setAttribute('href', newUrl);
    }
}