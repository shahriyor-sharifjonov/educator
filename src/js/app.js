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

new Swiper('.courses__swiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.courses__next',
    prevEl: '.courses__prev',
  },
})

new Swiper('.schools__swiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.schools__next',
    prevEl: '.schools__prev',
  },
})

new Swiper('.teachers__swiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.teachers__next',
    prevEl: '.teachers__prev',
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