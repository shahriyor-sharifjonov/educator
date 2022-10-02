import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper('.courses__swiper', {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: '.courses__next',
        prevEl: '.courses__prev',
    },
});

new Swiper('.schools__swiper', {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: '.schools__next',
        prevEl: '.schools__prev',
    },
});