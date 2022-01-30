const topHeight = () => {
  const height = document.querySelector('header').offsetHeight;
  document.getElementById('hero').style.height = `calc(100vh - ${height}px)`;
};

topHeight();
