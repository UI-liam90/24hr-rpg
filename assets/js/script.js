

var menuToggle = document.querySelector('.open-menu');
var menu = document.querySelector('.mobile-menu');
var menuItems = document.querySelectorAll('.mobile-menu > li');
menuToggle.addEventListener("click", function( event ) {
    event.preventDefault();
    menu.classList.toggle('active');
  }, false);
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function(event) {
    menu.classList.remove('active');
  });
}
