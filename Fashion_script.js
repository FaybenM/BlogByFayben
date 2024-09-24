const cursorTrail = document.getElementById('cursor-trail');

document.addEventListener('mousemove', (event) => {
  // Set the position of the cursor trail to the mouse position
  cursorTrail.style.left = `${event.pageX}px`;
  cursorTrail.style.top = `${event.pageY}px`;

  // Create a new butterfly element for each mouse movement
  const butterfly = document.createElement('div');
  butterfly.className = 'butterfly';
  butterfly.style.left = `${event.pageX}px`;
  butterfly.style.top = `${event.pageY}px`;
  document.body.appendChild(butterfly);

  // Remove the butterfly after a short duration (e.g., 500ms)
  setTimeout(() => {
    butterfly.remove();
  }, 500); // Adjust timing as necessary
});
