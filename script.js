function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const isOpen = mobileMenu.classList.contains('block');
    
    if (isOpen) {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
    } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileButton = document.querySelector('.md:hidden');
    
    if (!mobileButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Close menu when clicking menu items
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
        document.getElementById('mobileMenu').classList.remove('block');
    });
});