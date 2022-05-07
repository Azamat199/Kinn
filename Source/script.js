 $(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

 });

 /**
  * Слушаем событие прокрутки
  */
 window.addEventListener('scroll', e => {
	let navbar = document.getElementById('navbar').classList
	let active_class = "navbar_scrolled"

	if(pageYOffset > 200) navbar.add(active_class)
	else navbar.remove(active_class)
 })
 
  /**
  * выпадающее меню в футоре
  */
$(document).ready(function() {
  $('.link-arrow-1').on('click', function () {
	  $('.link-subtitle-1').toggle();
  });
  $('.link-arrow-2').on('click', function () {
	$('.link-subtitle-2').toggle();
});
$('.link-arrow-1').click(function(event){
	$('.link-arrow-1').toggleClass('event');
	$('body').toggleClass('lock');
});
$('.link-arrow-2').click(function(event){
	$('.link-arrow-2').toggleClass('event');
	$('body').toggleClass('lock');
});
});
