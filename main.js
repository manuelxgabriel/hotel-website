const menuBtn = document.getElementById('menu-btn')
const navLinks= document.getElementById('nav-links')
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', ()=> {
    navLinks.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open')
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
});

navLinks.addEventListener('click', ()=> {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    // Header Container
    ScrollReveal().reveal(".header_container p", {
     ...scrollRevealOption,
    });

    ScrollReveal().reveal(".header_container h1", {
        ...scrollRevealOption,
        delay: 500,
    });


    // About Container
    ScrollReveal().reveal(".about_image img", {
        ...scrollRevealOption,
        origin: "left",
    });

    ScrollReveal().reveal(".about_container .section_subheader", {
        ...scrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal(".about_container .section_header", {
        ...scrollRevealOption,
        delay: 1000,
    });

    ScrollReveal().reveal(".about_container .section_description", {
        ...scrollRevealOption,
        delay: 1500,
    })

    ScrollReveal().reveal(".about_btn", {
        ...scrollRevealOption,
        delay: 2000,
    })

});




