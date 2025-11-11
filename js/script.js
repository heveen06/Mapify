<<<<<<< HEAD
// Country info dictionary
const countryInfo = {
  us: "United States of America — known for its diverse landscapes and iconic cities.",
  iq: "Iraq — rich in history, home to ancient Mesopotamia.",
  fr: "France — famous for fashion, food, and the Eiffel Tower.",
  eg: "Egypt — land of pyramids and the Nile.",
  // Add more countries here...
};

// Function to show popup
function showPopup(message) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.background = "#b2f2bb"; // pastel green
  popup.style.color = "#2e7d32";
  popup.style.padding = "12px 20px";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  popup.style.fontFamily = "Poppins, sans-serif";
  popup.style.zIndex = "9999";
  popup.style.transition = "opacity 0.3s ease";
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

// Attach click listeners to countries
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(countryInfo).forEach((id) => {
    const paths = document.querySelectorAll(
      `#world-map [id='${id}'], #world-map g[id='${id}'] path`
    );
    paths.forEach((path) => {
      path.addEventListener("click", () => {
        showPopup(countryInfo[id]);
      });
    });
  });
});
=======

// const countries = document.querySelectorAll("path");
// const colors = ["color1", "color2", "color3", "color4", "color5"];

// countries.forEach((country, i) => {
//   country.classList.add(colors[i % colors.length]);
// });

>>>>>>> 4f0b9ba41ae3b36ff4363f1acd5923a8e545a3dc
