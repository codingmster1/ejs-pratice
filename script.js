document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('.navbar-toggler');
    const navLinks = document.querySelector('.nav-item');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });