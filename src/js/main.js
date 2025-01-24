//Print title and splash screen
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

  setTimeout(() => {
    typeText(); 
  }, 1850); 

  setTimeout(() => {
    splashScreen.style.opacity = "0"; 
  }, 1500); 

  setTimeout(() => {
    splashScreen.style.display = "none";
  }, 2500); 
});



// Scroll header link
document.querySelectorAll(".menu__list-item a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); 

    const targetId = this.getAttribute("href").substring(1); 
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
      const offset = 120; 
      const targetPosition = targetElement.offsetTop; 

      window.scrollTo({
        top: targetPosition - offset, 
        behavior: "smooth", 
      });
    }
  });
});


// Scroll footer link
document.querySelectorAll(".footer-link a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); 

    const targetId = this.getAttribute("href").substring(1); 
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
      const offset = 120; 
      const targetPosition = targetElement.offsetTop; 

      window.scrollTo({
        top: targetPosition - offset, 
        behavior: "smooth", 
      });
    }
  });
});


// Add styles to the header when scrolling
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 20) {
    header.classList.add("scrolled"); 
  } else {
    header.classList.remove("scrolled"); 
  }
});

// reboot page when click on the logo
const logos = document.querySelectorAll("#logo");

logos.forEach((logo) => {
  logo.addEventListener("click", () => {
    location.reload();
  });
});


// the appearance of elements when scroll 
document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".stack__inner");
  const columns = 4; 

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        const index = Array.from(hiddenElements).indexOf(entry.target);
        const row = Math.floor(index / columns);
        const col = index % columns;
        const delay = row * 300 + col * 300; 

        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 0.1, 
  });

  hiddenElements.forEach((element) => observer.observe(element));
});



// the appearance of elements when scroll 
document.addEventListener("DOMContentLoaded", () => {
  const simpleElements = document.querySelectorAll(".projects__carts");
   const simpleElements2 = document.querySelectorAll(".contacts");

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); 
        observer.unobserve(entry.target); 
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 0.1, 
  });

  simpleElements.forEach((element) => observer.observe(element));
  simpleElements2.forEach((element) => observer.observe(element));
});

