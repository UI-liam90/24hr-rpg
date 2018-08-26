

var menuToggle = document.querySelector('.open-menu');
var menu = document.querySelector('.site-sidebar');
var offcanvasClose = document.querySelector('.offcanvas-close');
var menuItems = document.querySelectorAll('.site-sidebar > li');
menuToggle.addEventListener("click", function( event ) {
    event.preventDefault();
    menu.classList.toggle('active');
    offcanvasClose.classList.add('active');
}, false);

offcanvasClose.addEventListener("click", function( event ) {
  event.preventDefault();
  menu.classList.remove('active');
  offcanvasClose.classList.remove('active');
}, false);

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function(event) {
    menu.classList.remove('active');
  });
}