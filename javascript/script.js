let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () =>{
    menuIcon.classList.toogle('bx-x')
    navbar.classList.toogle('active')
}

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let  top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}


// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '90px',
    duration: 1500,
    delay: 150
});
ScrollReveal().reveal('.home-content, .heading, .contact, .box', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .Projects-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .skill,skill-box', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'}); 

