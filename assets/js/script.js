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

var typed = new Typed('#typed-text', {
  strings: ['Hello!', 'Welcome to my Portfolio...'],
  typeSpeed: 50,
  loop: true,
  onComplete: function() {
      typed.stop();
  }
});


function toggleResponsiveClass() {
  window.removeEventListener("resize", toggleResponsiveClass);

  if (window.matchMedia("(max-width: 768px)").matches) {

    document.getElementById("content").classList.add("responsive");

    window.addEventListener("resize", toggleResponsiveClass);
  } else {
    
    document.getElementById("content").classList.remove("responsive");}
}
