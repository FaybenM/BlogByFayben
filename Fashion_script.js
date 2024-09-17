

document.addEventListener('mousemove', (event) => {
  const butterfly = document.getElementById('butterfly-emoji');
  butterfly.style.left = `${event.pageX}px`;
  butterfly.style.top = `${event.pageY}px`;
});
