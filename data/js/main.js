import {themeSwitch, urls } from "./navbar.js";

themeSwitch();
urls()

$(window).on('load resize', function () {
  $('#preloader').fadeOut(1000)
});