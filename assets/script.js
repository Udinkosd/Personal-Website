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
