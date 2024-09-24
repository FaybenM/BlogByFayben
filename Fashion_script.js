document.addEventListener('DOMContentLoaded', function() {
  const cursorTrail = document.getElementById('cursor-trail');
  
  document.addEventListener('mousemove', (event) => {
    cursorTrail.style.left = `${event.pageX}px`;
    cursorTrail.style.top = `${event.pageY}px`;
  });
});



is this code needed in my css:  
.butterfly {
  position: absolute;
  pointer-events: none;
  font-size: 1.5rem; /* Adjust size of the butterfly emoji */
  transform: translate(-50%, -50%);
  transition: transform 0.3s, opacity 0.3s;
  opacity: 1;
}