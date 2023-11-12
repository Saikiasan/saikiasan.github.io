let navbarContent = [{
    rel: 'Home',
    link: '/',
    icon: 'home'
  },
  {
    rel: 'Products',
    link: 'products',
    icon: 'books'
  }
];

export const navbar = () => {
  const container = $('header.page-header').addClass('py-3');
  const nav = $('<nav>').addClass('navbar navbar-expand-lg bg-body-tertiary pt-2');
  const containerFluid = $('<div>').addClass('container-fluid');
  const navbarBrand = $('<a>').addClass('navbar-brand d-flex align-center justify-content-center').attr('href', '/');
  $(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="60" viewBox="0 0 192 192">
  <g fill="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-dasharray="" stroke-dashoffset="0">
    <rect x="0" y="0" width="192" height="192" fill="none" fill-rule="nonzero"/>
    <circle cx="96" cy="96" r="96" fill="#ffca28" fill-rule="nonzero"/>
    <g fill="#3c4043" fill-rule="evenodd">
      <path d="M96,100.66667l-42,18.66667v-18.66667l42,-18.66667l42,18.66667v16.33333v-3.5v5.83333zM96,49.33333l42,18.66667v18.66667l-42,-18.66667l-42,18.66667v-18.66667zM111.75,117l21,9.33333l-36.75,16.33333v-18.66667z"/>
    </g>
  </g>
</svg>`).appendTo(navbarBrand)
  const navbarToggler = $('<button>').addClass('navbar-toggler border-0').attr('type', 'button').attr('data-bs-toggle', 'collapse').attr('data-bs-target', '#navbarSupportedContent').attr('aria-controls', 'navbarSupportedContent').attr('aria-expanded', 'false').attr('aria-label', 'Toggle navigation');
  const navbarTogglerspan = $('<span>').addClass('menu-ico fa fa-bars');
  const navbarCollapse = $('<div>').addClass('collapse navbar-collapse').attr('id', 'navbarSupportedContent');
  const themeSwitch = $('<div>').addClass('theme-switch me-4');
  const switchTheme = $('<div>').addClass('switch');
  $('<i>').addClass(`fa fa-moon-o text-center p-1`).appendTo(switchTheme)
  const navbarNav = $('<ul>').addClass('navbar-nav mx-auto mb-2 mb-lg-0');

  navbarContent.forEach(function (item) {
    const navItem = $('<li>').addClass('nav-item');
    const navLink = $('<a>').addClass('nav-link').attr({'href':'#','data-page':item.link,'onClick':`url(${item.link})`}).text(item.rel);
    navItem.append(navLink);
    navbarNav.append(navItem);
  });

  navbarToggler.append(navbarTogglerspan);
  navbarCollapse.append(navbarNav);
  themeSwitch.append(switchTheme);
  containerFluid.append(navbarToggler, navbarCollapse, themeSwitch);
  nav.append(containerFluid);
  container.append(navbarBrand, nav);

}

export const themeSwitch = () => {
  $('.theme-switch').on('click', function () {
    $('body').toggleClass('bg-dark')
    $('.switch .fa').toggleClass('fa-moon-o fa-sun-o')
    if ($('body').hasClass('bg-dark')) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.removeItem('theme')
    }
  });

  const theme = localStorage.getItem('theme')
  if (theme !== 'dark') {
    $('body').toggleClass('bg-dark');
  }

  $('.navbar-toggler').on('click', function () {
    $('.menu-ico').toggleClass('fa-bars fa-close');
  });

}

// LAST UPDATE ON 19-10-2023
export const urls = (activePage) => {
  // THE URL PARAM WINDOW SEARCH WILL NO LONGER BE USED
  // const urlParams = new URLSearchParams(window.location.search)
  const page = activePage || 'home'
  if (page) {
    var targetNavLink = $(`.nav-link[href="?page=${page}"]`)
    if (targetNavLink.length === 0) {
      targetNavLink = $('.nav-link[href="/"]')
    }
    targetNavLink.addClass('active')
    
    const filePath = 'pages/' + page + '.html'
    $('title').text('SAIKIACODES - ' + page.charAt(0).toUpperCase() + page.slice(1))
    $.ajax({
      url: filePath,
      dataType: 'html',
      success: function (content) {
        $('main.main').html(content)
      },
      error: function (status, error) {
        console.error('Error loading content:', error, status)
      }
    })
  } else {
    console.error("Missing url in url")
  }
}