const textParts = [
  { type: "fixed", content: "Hi 👋," }, 
  "My name is",
  { type: "styled", content: "Hrabar A.U" }, 
  "I build things for web.",
];

const typingSpeed = 80; 
const infoTitleElement = document.getElementById("info-title");

let currentText = ""; 
let partIndex = 0; 
let charIndex = 0; 

function typeText() {
  if (partIndex < textParts.length) {
    const currentPart = textParts[partIndex];

    if (typeof currentPart === "string") {
      
      if (charIndex < currentPart.length) {
        currentText += currentPart[charIndex]; 
        infoTitleElement.innerHTML = currentText;
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        currentText += "<br>"; 
        charIndex = 0;
        partIndex++;
        setTimeout(typeText, typingSpeed);
      }
    } else if (currentPart.type === "styled") {
      
      if (charIndex < currentPart.content.length) {
        const span = `<span>${currentPart.content.slice(
          0,
          charIndex + 1
        )}</span>`;
        infoTitleElement.innerHTML = currentText + span;
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        currentText += `<span>${currentPart.content}</span><br>`;
        charIndex = 0;
        partIndex++;
        setTimeout(typeText, typingSpeed);
      }
    } else if (currentPart.type === "fixed") {
      
      currentText += currentPart.content + "<br>";
      partIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }
}

typeText();
