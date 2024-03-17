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
