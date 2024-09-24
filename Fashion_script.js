const cursorTrail = document.getElementById("cursor-trail");

// Function to create multiple butterflies
function createButterfly(x, y) {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = `${x}px`;
    butterfly.style.top = `${y}px`;
    butterfly.innerHTML = "🦋"; // This can be replaced with an image if needed

    document.body.appendChild(butterfly);

    // Animation logic
    butterfly.style.animation = "animate 1s linear forwards";

    // Remove the butterfly after animation ends
    butterfly.addEventListener("animationend", () => {
        butterfly.remove();
    });
}

// Update the position on mouse movement
document.addEventListener("mousemove", (event) => {
    createButterfly(event.clientX, event.clientY);
});
