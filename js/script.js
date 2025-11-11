const infoBox = document.getElementById("info-box");

const countries = {
  us: {
    name: "United States",
    capital: "Washington, D.C.",
    president: "Joe Biden",
    img: "images/us.webp",
  },
};

// Attach click listeners to all <g> groups
document.querySelectorAll("svg g").forEach((group) => {
  group.addEventListener("click", (e) => {
    e.stopPropagation(); // stop document click

    const id = group.id;
    const countryData = countries[id];
    if (!countryData) return;

    const { name, capital, president, img } = countryData;

    // Build popup content with image on left
    infoBox.innerHTML = `
  <div class="popup-content">
    <img src="${img}" alt="${name}" class="popup-sticker">
    <div class="popup-text">
      <strong>${name}</strong>
      <p>Capital: ${capital}</p>
      <p>President: ${president}</p>
    </div>
  </div>
`;

    // Position popup near cursor (top-left corner alignment)
    const offsetX = 15; // right of cursor
    const offsetY = 15; // below cursor
    let left = e.pageX + offsetX;
    let top = e.pageY + offsetY;

    const boxWidth = infoBox.offsetWidth;
    const boxHeight = infoBox.offsetHeight;

    // Keep popup inside viewport
    if (left + boxWidth > window.innerWidth) left = e.pageX - boxWidth - 10;
    if (top + boxHeight > window.innerHeight) top = e.pageY - boxHeight - 10;

    infoBox.style.left = left + "px";
    infoBox.style.top = top + "px";

    // Show popup
    infoBox.style.display = "block";
    infoBox.classList.remove("hide");
    infoBox.classList.add("show");
  });
});

// Hide popup on clicking outside any country
document.addEventListener("click", (e) => {
  if (!e.target.closest("g")) {
    infoBox.classList.remove("show");
    infoBox.classList.add("hide");
    setTimeout(() => (infoBox.style.display = "none"), 200);
  }
});
