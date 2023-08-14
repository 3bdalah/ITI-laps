// Hook elements
const btnToggle = document.getElementById('btn-menu');
const menuLinks = document.getElementById('menu-links');
const allLinks = document.querySelectorAll('.link');

// Done function
btnToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});

// Not Working under fix
for (link of allLinks) {
    link.onclcik = () => {
        menuLinks.classList.toggle('active');
    }
}