document.addEventListener("DOMContentLoaded", function() {
    //Navbar Fixed
    window.onscroll = () => {
        const header = document.querySelector('header');
        const fixedNavbar = header.offsetTop;

        
        
        if(window.scrollY > fixedNavbar) {
            header.classList.add('navbar-fixed');
        }
        else {
            header.classList.remove('navbar-fixed');
        }
    }


    //Hamburger
    const hambuger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hambuger.addEventListener('click', () => {
        hambuger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
});