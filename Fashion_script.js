
document.addEventListener('mousemove', (event) => {
  const cursorTrail = document.getElementById('cursor-trail');
  cursorTrail.style.left = `${event.pageX}px`;
  cursorTrail.style.top = `${event.pageY}px`;
});
