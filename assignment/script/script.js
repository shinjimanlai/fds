let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let icon = document.querySelector('.icon');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('.header');
let slideIndex = 1;


searchBtn.onclick = function(){
    searchBox.classList.add('active');
    searchBtn.classList.add('active');
    closeBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open')
    icon.style.color = 'white';
    menuToggle.style.color = 'white';
}

closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
    icon.style.color = 'black';
    menuToggle.style.color = 'black';
}

menuToggle.onclick = function(){
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
}

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if(n > slides.length){
        slideIndex = 1 
    }

    if(n < 1){
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += 'active';
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


});