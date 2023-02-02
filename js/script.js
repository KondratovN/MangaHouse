
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

// slick slider 

$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        touchThreshold: 7,
    });
  });

const but = document.querySelector('.button_home')
const butText = document.querySelector('.bh_text')

butText.addEventListener('mouseover', function(event){ 
    but.classList.add('active');
        butText.classList.add('active');
});
butText.addEventListener('mouseout', function(event){ 

    but.classList.remove('active');
        butText.classList.remove('active');
});





