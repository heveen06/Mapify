const infoBox = document.getElementById("info-box");

const countries = {
  UnitedStates: {
    name: "United States",
    capital: "Washington, D.C.",
    leader: "Donald Trump",
    img: "images/us.webp",
    population: "341 million",
    area: "9,833,520 km&sup2;",
    language: "English",
    currency: "United States Dollar (USD, $)",
  },
  Canada: {
    name: "Canada",
    capital: "Ottawa",
    leader: "Justin Trudeau.",
    img: "images/canada.png",
    population: "40.8 million",
    area: "9,984,670 km&sup2;",
    language: "English and French",
    currency: "Canadian Dollar (CAD, $)",
  },
  MX: {
    name: "Mexico",
    capital: "Mexico City",
    leader: "Andrés Manuel López Obrador",
    img: "images/mexico.png",
    population: "128.9 million",
    area: "1,964,375 km&sup2;",
    language: "Spanish",
    currency: "Mexican Peso (MXN, $)",
  },
  AF: {
    name: "Afghanistan",
    capital: "Kabul",
    leader: "Hibatullah Akhundzada",
    img: "images/afghanistan-flag.jpg",
    population: "43.8 million",
    area: "652,860 km&sup2;",
    language: "Dari (Afghan Persian) & Pashto",
    currency: "Afghan afghani (AFN)",
  },
  AL: {
    name: "Albania",
    capital: "Tirana",
    leader: "Bajram Begaj",
    img: "images/albania-flag.webp",
    population: "2.8 million",
    area: "28,748 km&sup2;",
    language: "Albanian",
    currency: "Albanian lek (ALL)",
  },
  DZ: {
    name: "Algeria",
    capital: "Algiers",
    leader: "Abdelmadjid Tebboune",
    img: "images/algeria-flag.webp",
    population: "45 million",
    area: "2,381,741 km&sup2;",
    language: "Arabic and Berber",
    currency: "Algerian dinar (DZD)",
  },
  Angola: {
    name: "Angola",
    capital: "Luanda",
    leader: "João Lourenço",
    img: "images/angola-flag.webp",
    population: "35 million",
    area: "1,246,700 km&sup2;",
    language: "Portuguese",
    currency: "Angolan kwanza (AOA)",
  },
  AntiguaBarbuda: {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    leader: "Gaston Browne",
    img: "images/antiguabarbuda-flag.webp",
    population: "97,000",
    area: "442 km&sup2;",
    language: "English",
    currency: "East Caribbean dollar (XCD, $)",
  },
  Argentina: {
    name: "Argentina",
    capital: "Buenos Aires",
    leader: "Alberto Fernández",
    img: "images/argentina-flag.png",
    population: "45.8 million",
    area: "2,780,400 km&sup2;",
    language: "Spanish",
    currency: "Argentine peso (ARS, $)",
  },
  AM: {
    name: "Armenia",
    capital: "Yerevan",
    leader: "Vahagn Khachaturyan",
    img: "images/armenia-flag.webp",
    population: "3 million",
    area: "29,743 km&sup2;",
    language: "Armenian",
    currency: "Armenian dram (AMD)",
  },
  Australia: {
    name: "Australia",
    capital: "Canberra",
    leader: "Anthony Albanese",
    img: "images/australia-flag.png",
    population: "26 million",
    area: "7,692,024 km&sup2;",
    language: "English",
    currency: "Australian dollar (AUD, $)",
  },
  AT: {
    name: "Austria",
    capital: "Vienna",
    leader: "Karl Nehammer",
    img: "images/austria-flag.jpg",
    population: "9 million",
    area: "83,879 km&sup2;",
    language: "German",
    currency: "Euro (EUR, €)",
  },
  Azerbaijan: {
    name: "Azerbaijan",
    capital: "Baku",
    leader: "Ilham Aliyev",
    img: "images/azerbaijan-flag.webp",
    population: "10.1 million",
    area: "86,600 km&sup2;",
    language: "Azerbaijani",
    currency: "Azerbaijani manat (AZN, ₼)",
  },
};

// Listen to clicks on any SVG path
document.querySelectorAll("svg path").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();

    // Determine key dynamically
    const countryKey =
      element.id || element.getAttribute("name") || element.className.baseVal;
    if (!countryKey || !countries[countryKey]) return;

    const data = countries[countryKey];
    const { name, capital, leader, img, population, area, language, currency } =
      data;

    infoBox.innerHTML = `
      <div class="popup-content">
        <img src="${img}" alt="${name}" class="popup-sticker">
        <div class="popup-text">
          <strong>${name}</strong>
          <p>Capital: ${capital}</p>
          <p>Leader: ${leader}</p>
          <p>Population: ${population}</p>
          <p>Area: ${area}</p>
          <p>Language: ${language}</p>
          <p>Currency: ${currency}</p>
        </div>
      </div>
    `;

    // Position popup near cursor
    const offsetX = 15,
      offsetY = 15;
    let left = e.pageX + offsetX;
    let top = e.pageY + offsetY;

    const boxWidth = infoBox.offsetWidth;
    const boxHeight = infoBox.offsetHeight;

    if (left + boxWidth > window.innerWidth) left = e.pageX - boxWidth - 10;
    if (top + boxHeight > window.innerHeight) top = e.pageY - boxHeight - 10;

    infoBox.style.left = left + "px";
    infoBox.style.top = top + "px";
    infoBox.style.display = "block";
    infoBox.classList.remove("hide");
    infoBox.classList.add("show");
  });
});

// Hide popup on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest("path")) {
    infoBox.classList.remove("show");
    infoBox.classList.add("hide");
    setTimeout(() => (infoBox.style.display = "none"), 200);
  }
});
