//menu
const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    body = document.querySelector('body'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('body_fixed');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

//about tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      $('.about__poryadok__slider').slick('refresh');
  });

//Программа курса больше 
          
var visibleBlocks = 4;
var allBlocks = $('.about__programm__details').length;
        
$('.about__programm__details').slice(visibleBlocks).hide();
        
$('.about__programm__more').on('click', function() {
          visibleBlocks += 4;
          
  if (visibleBlocks >= allBlocks) {
    $('.about__programm__more').hide();
  }
           
  $('.about__programm__details').slice(0, visibleBlocks).show();
});

//slider
$('.about__licens__slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true,
  asNavFor: '.about__licens__slider-nav'
});
$('.about__licens__slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.about__licens__slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  
});
//слайдер порядок поступления
$('.about__poryadok__slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    
   
  ]

});


//слайдер Преподаватели и эксперты курса
$('.teachers__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    
   
  ]

});

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '000-000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//слайдер Студенты довольны обучением
$('.assessments__slider').slick({
  infinite: true,
  slidesToShow: 1,
  
});

//модальное окно
$('.consult').on('click', function(){
  $('.overlay, .modal-consult').fadeIn();
});
$('.modal__close').on('click', function(){
  $('.overlay, .modal').fadeOut();
});