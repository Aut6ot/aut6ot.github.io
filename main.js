// Get all section elements and nav dots
const sections = document.querySelectorAll('.section');
const navDots = document.querySelectorAll('.dot');

// Function to detect which section is in view
function updateActiveDot() {
  let index = sections.length;

  while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

  navDots.forEach(dot => dot.classList.remove('active'));
  navDots[index].classList.add('active');
}

// Listen for scroll event
window.addEventListener('scroll', updateActiveDot);
