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
  const strings = ['Hello', 'Welcome To My Portfolio']; // Adjusted strings
  const typeSpeed = 50; // Faster typing speed
  const backSpeed = 80; // Slightly slower backspacing speed
  const startDelay = 500; // Delay before typing starts
  const backDelay = 1000; // Delay before backspacing starts
  const loop = true;

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

// function toggleAbout() {
//     var aboutSection = document.getElementById('showAbout');
    
//     if (aboutSection.style.display === 'none') {
//         aboutSection.style.display = 'block';
//     } else {
//         aboutSection.style.display = 'none';
//     }
// }

// const showAboutSection = document.getElementById('showAbout');
// const triggerPoint = 500; // Adjust this value as needed

// window.addEventListener('scroll', function() {
//     // Get the current scroll position
//     const scrollPosition = window.scrollY || window.pageYOffset;

//     // Check if the scroll position is beyond the trigger point
//     if (scrollPosition > triggerPoint) {
//         showAboutSection.classList.remove('skip-me'); // Show the about section
//     } else {
//         showAboutSection.classList.add('skip-me'); // Hide the about section
//     }
// });

