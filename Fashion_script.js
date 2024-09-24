document.addEventListener('DOMContentLoaded', function() {
  const cursorTrail = document.getElementById('cursor-trail');
  
  document.addEventListener('mousemove', (event) => {
    cursorTrail.style.left = `${event.pageX}px`;
    cursorTrail.style.top = `${event.pageY}px`;
  });
});



