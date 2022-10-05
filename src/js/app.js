import * as functions from "./modules/functions.js"

functions.isWebp()

import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

import $ from 'jquery'

if(document.querySelector('.courses__cat-track')){
  const el = document.querySelectorAll('.courses__cat-track')
  el.forEach(track => {
    const btns = track.querySelectorAll('.courses__cat-item')
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const contents = document.querySelectorAll('.courses__content')
        contents.forEach(content => {
          content.classList.remove('active');
        })
        btns.forEach(btn2 => {
          btn2.classList.remove('active')
        })
        btn.classList.add('active')
        const target = btn.getAttribute('data-target')
        const content = document.getElementById(target)
        content.classList.add('active')
      })
    })
  })
}

if(document.querySelector('.products__tag')){
  const items = document.querySelectorAll('.products__tag-item');
  const btn = document.querySelector('.products__tag-btn');
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    if(open){
      btn.innerHTML = 'Свернуть'
    }else{
      btn.innerHTML = 'Показать все'
    }
    items.forEach(el => {
      el.classList.toggle('open')
    })
  })
  items.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('active')
    })
  })
  for(let i = 0; i < items.length; i++){
    if(i > 5){
      items[i].classList.add('dn')
    }
  }
}

if(document.querySelector('.detail__tag-btn')){
  const items = document.querySelectorAll('.detail__tag-item');
  const btn = document.querySelector('.detail__tag-btn');
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    if(open){
      btn.innerHTML = 'Свернуть'
    }else{
      btn.innerHTML = 'Показать все'
    }
    items.forEach(el => {
      el.classList.toggle('open')
    })
  })
  items.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('active')
    })
  })
  for(let i = 0; i < items.length; i++){
    if(i > 5){
      items[i].classList.add('dn')
    }
  }
}

new Swiper('.courses__swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.courses__next',
    prevEl: '.courses__prev',
  },
  pagination: {
    el: ".courses__pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})

new Swiper('.schools__swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.schools__next',
    prevEl: '.schools__prev',
  },
  pagination: {
    el: ".schools__pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})

new Swiper('.teachers__swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.teachers__next',
    prevEl: '.teachers__prev',
  },
  pagination: {
    el: ".teachers__pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})

new Swiper('.news__swiper', {
  modules: [Navigation, Pagination],
slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
  pagination: {
    el: ".news__pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})

const headerButton = document.querySelector(".header__button")
const headerMenu = document.querySelector(".header__menu")
let headerMenuOpen = false
const headerMenuToggle = () => {
  headerMenuOpen = !headerMenuOpen
  headerButton.classList.toggle("open")
  headerMenu.classList.toggle("open")
}

headerButton.onclick = headerMenuToggle

const menuBtn = document.querySelector(".menu__open")
const menuContent = document.querySelector(".menu__content")
let menuOpened = false
const menuToggle = () => {
  menuOpened = !menuOpened
  menuBtn.classList.toggle("open")
  menuContent.classList.toggle("open")
}

menuBtn.onclick = menuToggle

const searchBtn = document.querySelector(".search-sm__btn")
const searchContent = document.querySelector(".search-sm__wrap")
const searchClose = document.querySelector(".search-sm__close")
let searchOpened = false
const searchToggle = () => {
  searchOpened = !searchOpened
  searchBtn.classList.toggle("active")
  searchContent.classList.toggle("open")
}

searchBtn.onclick = searchToggle

window.onclick = (e) => {
  if (menuOpened && !e.composedPath().includes(menuBtn) && !e.composedPath().includes(menuContent)){
    menuToggle()
  }
  if (headerMenuOpen && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu)){
    headerMenuToggle()
  }
  if (searchOpened && !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchContent)){
    searchToggle()
  }
  if (searchOpened && e.target.classList.contains('search-sm__wrap')){
    searchToggle()   
  }
}

$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
      $(this)
        .siblings(".accordion__content")
        .slideUp(200)
    } else {
      $(".accordion > .accordion__button").removeClass("active")
      $(this).addClass("active")
      $(".accordion__content").slideUp(200)
      $(this)
        .siblings(".accordion__content")
        .slideDown(200)
    }
  })
})

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);