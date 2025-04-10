export function hideOnScroll() {
  const navbar = document.querySelector('#navbar');
  let isScrolled = false;

  navbar.addEventListener('mouseover', () => {
    if (isScrolled) {
      navbar.style.opacity = '1';
      navbar.style.transition = 'opacity 0.5s';
    }
  });

  navbar.addEventListener('mouseout', () => {
    if (isScrolled) {
      navbar.style.opacity = '0.8';
      navbar.style.transition = 'opacity 0.5s';
    }
  });

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 70) {
      navbar.style.opacity = '0.8';
      navbar.style.transition = 'opacity 0.5s';
      isScrolled = true;
    } else {
      navbar.style.opacity = '1';
      navbar.style.transition = 'opacity 0.5s';
      isScrolled = false;
    }
  });
}