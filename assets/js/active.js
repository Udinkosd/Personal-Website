// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll("#fp-nav li");
  
//     window.addEventListener("scroll", scrollActive);
  
//     function scrollActive() {
//       const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
//       sections.forEach((current, index) => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50; // Adjust the value to control the distance from the top
//         const sectionId = current.getAttribute("id");
  
//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//           navLinks.forEach((link) => {
//             link.classList.remove("active");
//             document.querySelector(`#${sectionId}-nav a`).classList.add("active");
//           });
//         }
//       });
//     }
  
//     // Initial active class on page load
//     scrollActive();
//   });