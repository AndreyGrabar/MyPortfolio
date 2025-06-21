export function initSplashScreen() {
  window.addEventListener("load", () => {
    const splashScreen = document.getElementById("splash-screen");
    const textParts = [
      { type: "fixed", content: "Hi 👋," },
      "My name is",
      { type: "styled", content: "Andrey Hrabar." },
      "I am a Front-End developer.",
    ];

    const typingSpeed = 80;
    const infoTitleElement = document.getElementById("info-title");

    let currentText = "";
    let partIndex = 0;
    let charIndex = 0;

    function typeText() {
      const screenWidth = window.innerWidth;
      const isWideScreen = screenWidth >= 550;

      if (partIndex < textParts.length) {
        const part = textParts[partIndex];

        const addBreak = isWideScreen ? "<br>" : " ";
        const addStyled = (content) =>
          `<span>${content.slice(0, charIndex + 1)}</span>`;

        if (typeof part === "string") {
          if (charIndex < part.length) {
            currentText += part[charIndex];
            infoTitleElement.innerHTML = currentText;
            charIndex++;
            setTimeout(typeText, typingSpeed);
          } else {
            currentText += addBreak;
            charIndex = 0;
            partIndex++;
            setTimeout(typeText, typingSpeed);
          }
        } else if (part.type === "styled") {
          if (charIndex < part.content.length) {
            infoTitleElement.innerHTML = currentText + addStyled(part.content);
            charIndex++;
            setTimeout(typeText, typingSpeed);
          } else {
            currentText += `<span>${part.content}</span>${addBreak}`;
            charIndex = 0;
            partIndex++;
            setTimeout(typeText, typingSpeed);
          }
        } else if (part.type === "fixed") {
          currentText += part.content + addBreak;
          partIndex++;
          setTimeout(typeText, typingSpeed);
        }
      }
    }

    setTimeout(() => typeText(), 1850);
    setTimeout(() => (splashScreen.style.opacity = "0"), 1500);
    setTimeout(() => (splashScreen.style.display = "none"), 2500);
  });

  window.addEventListener("load", () => {
    const photo = document.querySelector(".myphoto");
    setTimeout(() => {
      photo.classList.add("revealed");
    }, 2000);
  });
}
