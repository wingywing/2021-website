var toggle = document.querySelector('#toggle');
var menu = document.querySelector('#menu');
var header = document.querySelector('.header');
var list = document.querySelectorAll('nav li');
var hamburger = document.querySelector('.hamburger');

toggle.addEventListener('click', function(){
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
    header.classList.remove('is-active');
    hamburger.classList.remove('active');
    for (var i=0; i <list.length; i++){
        list[i].classList.remove('is-active');
    }
  } else {
    menu.classList.add('is-active'); 
    header.classList.add('is-active');
    hamburger.classList.add('active');
    for (var i=0; i <list.length; i++){
        list[i].classList.add('is-active');
    }
  }
});
