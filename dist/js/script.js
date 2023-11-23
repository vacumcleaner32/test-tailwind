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

        const body = document.body;
        const toTop = document.querySelector('#to-top');
        if(window.scrollY < 3/4 * body.scrollHeight) {
            toTop.classList.add('hidden');
            toTop.classList.remove('flex');
        }
        else {
            toTop.classList.remove('hidden');
            toTop.classList.add('flex');
        }
       
    }


    //Hamburger
    const hambuger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hambuger.addEventListener('click', () => {
        hambuger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });


    // Clicked outside of hamburger menu area

    window.addEventListener('click', (e) => {
        if(e.target !== hambuger && e.target !== navMenu) {
            hambuger.classList.remove('hamburger-active');
            navMenu.classList.add('hidden');
        }
    });



    // Dark Toggle

    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');
    let a = 1;

    darkToggle.addEventListener('click' , () => {
        if(darkToggle.checked) {
            darkToggle.classList.add('nanana')
        }
        else {
            darkToggle.classList.remove('nanana');
        }
    });    
});