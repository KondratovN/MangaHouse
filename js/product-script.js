
const input = document.querySelector('.search')
const lupa = document.querySelector('.lupa_two')
const morgin = document.querySelector('.morgin_header')

lupa.addEventListener('click', function(event){ 

    const iff = document.querySelector('.search').classList.contains('active');

    if (iff == false) {
        input.classList.add('active');
        morgin.classList.add('active');
    } else {
        input.classList.remove('active');
        morgin.classList.remove('active');
    }
});

function headerWidth() {
    var w = window.innerWidth;
    if (w > 600) {
        input.classList.remove('active');
        morgin.classList.remove('active');
    }
  }

  window.addEventListener('resize', function() {
    headerWidth();
  });

// slick

$(document).ready(function(){
    $('.pic').slick({
        arrows: false,
        dots: true,
        fade: true
    });
});

