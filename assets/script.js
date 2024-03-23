function scrollToContact() {
    document.getElementById("contact-page").scrollIntoView({
        behavior: "smooth"
    });
}

function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById('copyright');
  if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} VibingCO!. All Rights Reserved.`;
  }
}

updateCopyrightYear();

function typingText() {
  const typingElement = document.querySelector(".auto-type");
  const strings = ['Hello', 'Welcome To My Portfolio...'];
  const typeSpeed = 50; 
  const backSpeed = 80;
  const startDelay = 500;
  const backDelay = 1000;
  const loop = false;

  const typed = new Typed(typingElement, {
    strings: strings,
    typeSpeed: typeSpeed,
    backSpeed: backSpeed,
    startDelay: startDelay,
    backDelay: backDelay,
    loop: loop,
  });
}

typingText();

function toggleResponsiveClass() {
  // Remove the event listener from the window object when it is not needed anymore
  window.removeEventListener("resize", toggleResponsiveClass);

  // Check if the screen size is smaller than or equal to 768px
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Add the responsive class to the content section
    document.getElementById("content").classList.add("responsive");

    // Add the event listener to the window object again
    window.addEventListener("resize", toggleResponsiveClass);
  } else {
    // Remove the responsive class from the content section
    document.getElementById("content").classList.remove("responsive");}
}