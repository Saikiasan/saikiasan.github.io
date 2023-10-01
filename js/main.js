import { navbar, themeSwitch, urls } from "./navbar.js";

navbar();
themeSwitch();
urls()

$(window).on('load resize', function () {
  $('#preloader').fadeOut(1000)
});

