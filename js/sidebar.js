document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".menu-toggle").addEventListener("click", () => {
      document.querySelector(".mobile-sidebar").classList.add("show");
    });
  
    document.querySelector(".close-sidebar").addEventListener("click", () => {
      document.querySelector(".mobile-sidebar").classList.remove("show");
    });
  });
  