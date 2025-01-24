//Väntar tills hela sidan är färdigladdad innan js körs
document.addEventListener("DOMContentLoaded", function () {
  // Hitta knappen för att ändra bakgrundsfärg
  const changeBackgroundButton = document.getElementById("changeBackground");

  // Hitta knappen och element för att visa/dölja info-rutan
  const toggleInfoBoxButton = document.getElementById("toggleInfoBox");
  const infoBox = document.getElementById("infoBox");

  // Array av möjliga bakgrundsfärger
  const colors = ["#f4f4f4", "#a3c9f1", "#ffcccb", "#d3f9d8", "#e0e0e0"];

  // Lägg till funktionalitet för att ändra bakgrundsfärg
  if (changeBackgroundButton) {
    changeBackgroundButton.addEventListener("click", function () {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    });
  }

  // Lägg till funktionalitet för att toggla info-rutan
  if (toggleInfoBoxButton && infoBox) {
    toggleInfoBoxButton.addEventListener("click", function () {
      infoBox.style.display = infoBox.style.display === "none" ? "block" : "none";
    });
  }
});
