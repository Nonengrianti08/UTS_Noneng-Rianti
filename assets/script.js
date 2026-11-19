// MENU NAVIGASI MOBILE
const nonengToggle = document.getElementById('noneng_toggle');
const nonengMenu = document.getElementById('noneng_menu');

if (nonengToggle && nonengMenu) {
    nonengToggle.addEventListener('click', function () {
        const isOpen = nonengMenu.classList.toggle('noneng_show');

        nonengToggle.setAttribute('aria-expanded', String(isOpen));
        nonengToggle.textContent = isOpen ? '×' : '☰';
    });
}

// MENAMPILKAN TAHUN OTOMATIS
document.querySelectorAll('.noneng_year').forEach(function (item) {
    item.textContent = new Date().getFullYear();
});

// FORMULIR KONTAK
const nonengForm = document.getElementById('noneng_contact_form');

if (nonengForm) {
    nonengForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const message = document.getElementById('noneng_form_message');

        if (message) {
            message.classList.remove('noneng_error');
            message.textContent =
                'Terima kasih! Pesan kamu berhasil diperiksa.';
        }

        nonengForm.reset();
    });
}