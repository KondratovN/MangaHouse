const btn = document.querySelector('.bh_text_shop');
const btn_n = document.querySelector('.button_shop');
const itemlenght = document.querySelectorAll('.card_product').length;

let items = 18;

btn.addEventListener('click', function(event) { 
items += 11;
const array = Array.from(document.querySelector('.catalog').children);
const visItem = array.slice(0, items);

visItem.forEach(el => el.classList.add('is_visible'));

if (visItem.length === itemlenght) {
    btn.classList.add('nonee');
}
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

let All_categories = document.getElementById('All_categories')
let Popular = document.getElementById('Popular')
let New = document.getElementById('New')
let Romance = document.getElementById('Romance')
let Shounen = document.getElementById('Shounen')
let Fantasy = document.getElementById('Fantasy')
let Comedy = document.getElementById('Comedy')

let productAll_categories = document.querySelectorAll('.All_categories')
let productPopular = document.querySelectorAll('.Popular')
let productNew = document.querySelectorAll('.New')
let productRomance = document.querySelectorAll('.Romance')
let productShounen = document.querySelectorAll('.Shounen')
let productFantasy = document.querySelectorAll('.Fantasy')
let productComedy = document.querySelectorAll('.Comedy')

let CD = document.querySelectorAll('.card_product')



const button = document.querySelector('.filter_button')

All_categories.addEventListener('click', function(event) {

    if (All_categories.checked == true) {
        Popular.checked = true
        New.checked = true
        Romance.checked = true
        Shounen.checked = true
        Fantasy.checked = true
        Comedy.checked = true
    } else if (All_categories.checked == false) {
        Popular.checked = false
        New.checked = false
        Romance.checked = false
        Shounen.checked = false
        Fantasy.checked = false
        Comedy.checked = false
    }
});

Popular.addEventListener('click', function(event) {
    All_categories.checked = false
});
New.addEventListener('click', function(event) {
    All_categories.checked = false
});
Romance.addEventListener('click', function(event) {
    All_categories.checked = false
});
Shounen.addEventListener('click', function(event) {
    All_categories.checked = false
});
Fantasy.addEventListener('click', function(event) {
    All_categories.checked = false
});
Comedy.addEventListener('click', function(event) {
    All_categories.checked = false
});

//----------------------------------------------------------------

const inputOt = document.getElementById('ot')
const inputDo = document.getElementById('do')
let price = document.querySelectorAll('.price')
let noOne = document.querySelector('.no_one')



button.addEventListener('click', function(event) {

    items += 20;
const array = Array.from(document.querySelector('.catalog').children);
const visItem = array.slice(0, items);

visItem.forEach(el => el.classList.add('is_visible'));

if (visItem.length === itemlenght) {
    btn_n.classList.add('nonee');
}

    CD.forEach(function(elem) {
        if (inputOt.value > 0 || inputDo.value > 0) {
            elem.classList.add('Nohidden_price')
        }
    });

    let i = inputOt.value;
while (i < inputDo.value) {
    price.forEach(function(item) {
        if (item.innerHTML == i) {
            item.closest(".card_product").classList.remove('Nohidden_price')
        } 
    })
  i++;
  if (i == 100000) {
    break
  }
}

    if (All_categories.checked == false &
        Popular.checked == false &
        New.checked == false &
        Romance.checked == false &
        Shounen.checked == false &
        Fantasy.checked == false &
        Comedy.checked == false) {
            All_categories.checked = true
            Popular.checked = true
            New.checked = true
            Romance.checked = true
            Shounen.checked = true
            Fantasy.checked = true
            Comedy.checked = true
        }

    if (All_categories.checked == false,
        Popular.checked == false,
        New.checked == false,
        Romance.checked == false,
        Shounen.checked == false,
        Fantasy.checked == false,
        Comedy.checked == false) {
            productAll_categories.forEach(function(elem) {
                elem.classList.add('hidden')
            });
        }

    if (Popular.checked == false) {
        productPopular.forEach(function(elem) {
            elem.classList.add('hidden')
        });
    } else if (Popular.checked == true) {
        productPopular.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
    }

    if (New.checked == false) {
        productNew.forEach(function(elem) {
            elem.classList.add('hidden')
        });
    } else if (New.checked == true) {
        productNew.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
    }
        
    if (Romance.checked == false) {
        productRomance.forEach(function(elem) {
            elem.classList.add('hidden')
        });
    } else if (Romance.checked == true) {
        productRomance.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
    }

    if (Shounen.checked == false) {
        productShounen.forEach(function(elem) {
            elem.classList.add('hidden')
        });
    } else if (Shounen.checked == true) {
        productShounen.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
    }

    if (Fantasy.checked == false) {
        productFantasy.forEach(function(elem) {
            elem.classList.add('hidden')
        });
    } else if (Fantasy.checked == true) {
        productFantasy.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
    }

    if (Comedy.checked == false) {
        productComedy.forEach(function(elem) {
            elem.classList.add('hidden')
        });
    } else if (Comedy.checked == true) {
        productComedy.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
    }

    //-----------------------------------------------------

    if (All_categories.checked == true) {
        productAll_categories.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
        Popular.checked = true
        New.checked = true
        Romance.checked = true
        Shounen.checked = true
        Fantasy.checked = true
        Comedy.checked = true
    }

    let push = []
    productAll_categories.forEach(function(elem){
        if (elem.classList.contains('hidden')==true) {
            push.push(elem.classList.contains('hidden'))
        }

        if (push.length == productAll_categories.length) {
            noOne.classList.add('active')
        } else if (push.length < productAll_categories.length) {
            noOne.classList.remove('active')
        }
    })

    let pushTwo = []
    productAll_categories.forEach(function(elem){
        if (elem.classList.contains('Nohidden_price')==true) {
            pushTwo.push(elem.classList.contains('Nohidden_price'))
            console.log(pushTwo)
        }

        if (pushTwo.length == productAll_categories.length) {
            noOne.classList.add('active')
        } else if (push.length < productAll_categories.length) {
            noOne.classList.remove('active')
        }
    })


    });
//------------------------------------------------------

if (All_categories.checked == true) {
    productAll_categories.forEach(function(elem) {
        elem.classList.remove('hidden')
    });
    Popular.checked = true
    New.checked = true
    Romance.checked = true
    Shounen.checked = true
    Fantasy.checked = true
    Comedy.checked = true
}

//-----------------------------------------------------------------------

const butFilter = document.querySelector('.active_filter')
const filter = document.querySelector('.aside')
const butTwo = document.querySelector('.filter_button')
const cross = document.querySelector('.cross')
const body = document.querySelector('.body')
const wrap = document.querySelector('.men_wrap')

filter.addEventListener('swiped-right', function(event){ 
    body.classList.remove('active');
    wrap.classList.remove('active');
});

butFilter.addEventListener('click', function(event){ 
    body.classList.add('active');
    wrap.classList.add('active');
    filter.classList.add('active');
});

butTwo.addEventListener('click', function(event){ 
    filter.classList.remove('active');
    body.classList.remove('active');
    wrap.classList.remove('active');
});
cross.addEventListener('click', function(event){ 
    filter.classList.remove('active');
    body.classList.remove('active');
    wrap.classList.remove('active');
});
wrap.addEventListener('click', function(event){ 
    filter.classList.remove('active');
    body.classList.remove('active');
    wrap.classList.remove('active');
});

//---------------------

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

//---------------------------