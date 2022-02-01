function divSize(element, scale) {
  const headerHeight = document.querySelector('header').offsetHeight;
  document.getElementById(element).style.minHeight = `calc(100vh - ${headerHeight * scale}px)`;
}

divSize('hero', 1);
divSize('description', 2);
divSize('past', 2);

const menuBtn = document.querySelector('#menuBtn');
let open = false;
menuBtn.addEventListener('click', () => {
  const menuIcon = document.querySelector('#menuIcon');
  if (open) {
    menuIcon.className = 'fas fa-bars';
    open = false;
  } else {
    menuIcon.className = 'fas fa-times';
    open = true;
  }
});
