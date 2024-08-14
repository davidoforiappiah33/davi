window.initializeSidebar = function () {
    const navLinks = document.querySelectorAll('#sidebarMenu .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
};
