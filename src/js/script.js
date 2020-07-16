'use strict';

function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('hidden', visible);
}

document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});

if (window.screen.width < 768) {
  document.querySelector('.sidebar').classList.add('hidden');
} else {
  document.querySelector('.sidebar').classList.remove('hidden');
}
