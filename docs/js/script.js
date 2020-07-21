'use strict';

function toggleMenuSm(visible) {
  if (window.screen.width < 768) {
    document.querySelector('.sidebar').classList.toggle('hidden-sidebar', visible);
    document.querySelector('.top-menu').classList.toggle('hidden-topmenu', visible);
  }
}

document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenuSm();
});

function toggleMenuLg(visible) {
  if (window.screen.width >= 768) {
    document.querySelector('.sidebar').classList.toggle('hidden-sidebar', visible);
  }
}

document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenuLg();
});

if (window.screen.width < 768) {
  document.querySelector('.sidebar').classList.add('hidden-sidebar');
  document.querySelector('.top-menu').classList.add('hidden-topmenu');
} else {
  document.querySelector('.sidebar').classList.remove('hidden-sidebar');
  document.querySelector('.top-menu').classList.remove('hidden-topmenu');
}
