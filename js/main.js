'use strict';

const footer_year = document.querySelector('.year');

const year = new Date().getFullYear();
footer_year.textContent = year;