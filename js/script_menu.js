const btn = document.querySelector('.bh_text_shop');
const itemlenght = document.querySelectorAll('.card_product').length;

let items = 14;

btn.addEventListener('click', function(event) { 
items += 11;
const array = Array.from(document.querySelector('.catalog').children);
const visItem = array.slice(0, items);

visItem.forEach(el => el.classList.add('is_visible'));

if (visItem.length === itemlenght) {
    btn.classList.add('none');
}
});

const but = document.querySelector('.button_shop')
const butText = document.querySelector('.bh_text_shop')

butText.addEventListener('mouseover', function(event){ 
    but.classList.add('active');
        butText.classList.add('active');
});
butText.addEventListener('mouseout', function(event){ 

    but.classList.remove('active');
        butText.classList.remove('active');
});


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

