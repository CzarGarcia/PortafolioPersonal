let secciones = document.querySelectorAll('section');
let enlaces = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    secciones.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

       if(top >= offset && top < offset + heigth){
           enlaces.forEach( links => {
            links.classList.remove('activos');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('activos');
           });

        //    ACTIVANDO LAS ANIMACIONES CUANDO BAJAS
           sec.classList.add('mostrarAnimacion');  
        }
           else { 
            sec.classList.remove('mostrarAnimacion');
       
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('barraNavegacion', window.scrollY > 100);
    
}

let menu = document.querySelector('#iconoMenu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('activos');
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });