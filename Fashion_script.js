const cursorTrail = document.getElementById("cursor-trail");

// Function to create multiple butterflies
function createButterfly(x, y) {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly"; // Use the class we defined in CSS
    butterfly.style.left = `${x}px`;
    butterfly.style.top = `${y}px`;
    butterfly.innerHTML = "🦋"; // This can be replaced with an image if needed

    document.body.appendChild(butterfly);

    // Animation logic
    butterfly.style.animation = "flutter 1s forwards"; // Use the flutter animation

    // Remove the butterfly after animation ends
    butterfly.addEventListener("animationend", () => {
        butterfly.remove();
    });
}

// Update the position on mouse movement
document.addEventListener("mousemove", (event) => {
    // Create a butterfly at the current mouse position
    createButterfly(event.clientX, event.clientY);

    // Update cursorTrail position
    cursorTrail.style.left = `${event.pageX}px`; // Use pageX for scrolling
    cursorTrail.style.top = `${event.pageY}px`;  // Use pageY for scrolling
});
