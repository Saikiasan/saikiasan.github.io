import { navbar, themeSwitch, urls } from "./navbar.js";

// navbar();
themeSwitch();
urls()

$(window).on('load resize', function () {
  $('#preloader').fadeOut(1000)
});

const navItems = $('.nav-item .nav-link')

navItems.on('click',function(){
  const page = $(this).data('page')
  urls(page)
})
