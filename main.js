const divSize = (element, height) => {
  document.getElementById(element).style.height = `calc(100vh - ${height}px)`;
};

const headerHeight = document.querySelector('header').offsetHeight;
divSize('hero', headerHeight);
divSize('program', headerHeight * 2);

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
