//about tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
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

});

//слайдер Преподаватели и эксперты курса
$('.teachers__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,

});