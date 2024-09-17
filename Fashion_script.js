document.addEventListener('mousemove', function(e) {
  const sunflower = document.createElement('span');
  sunflower.textContent = '🌼';
  sunflower.className = 'sunflower';
  document.body.appendChild(sunflower);
  
  sunflower.style.left = `${e.pageX}px`;
  sunflower.style.top = `${e.pageY}px`;

  setTimeout(() => {
    sunflower.remove();
  }, 2000); // Adjust the time as needed
});

