const cards = document.querySelectorAll(".card");

document.addEventListener("mousemove", (e) => {
  // Get the mouse position.
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cards.forEach((card) => {
    // Get the center of the card.
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const intensity = 15;

    // Calculate the distance between the mouse and the center of the card.
    const deltaX = mouseX - cardCenterX;
    const deltaY = mouseY - cardCenterY;

    /* Calculating the angle of the mouse relative to the center of the card. */
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angleX = (-deltaY / distance) * intensity;
    const angleY = (deltaX / distance) * intensity;

    // If the card is hovered, then apply the rotation.
    if (card.classList.contains("hovered")) {
      card.style.transform = `translateY(-5%) perspective(2500px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
    // Otherwise, reset the rotation.
    else {
      card.style.transform = `perspective(2500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  });
});

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("hovered");
  });
});
