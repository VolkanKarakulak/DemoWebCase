// Mobile menu toggle functionality
const mobileBtn = document.getElementById('nav-mobile-btn');
const mobileNav = document.getElementById('mobile-nav');
const closeBtn = document.getElementById('close-mobile-nav');

// Menüyü açma/kapatma
mobileBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    mobileNav.classList.toggle('hidden');
});

// Overlay'e tıklayınca kapatma
mobileNav.addEventListener('click', function (e) {
    if (e.target === mobileNav) {
        mobileNav.classList.add('hidden');
    }
});

// ESC tuşuyla kapatma
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
    }
});

// Kapat butonu ve linkler
closeBtn.addEventListener('click', closeMobileNav);
document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

function closeMobileNav() {
    mobileNav.classList.add('hidden');
}