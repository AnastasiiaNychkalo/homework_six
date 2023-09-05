const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const animationClass = circle.getAttribute('data-anim');
  circle.classList.add(animationClass);
});

circles.forEach(circle => {
  circle.addEventListener('animationend', () => {
    console.log(`Анімація застосована до елемента з класом ${circle.className}`);
  });
});