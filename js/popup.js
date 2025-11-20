document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("getQuoteBtn");
    const popup = document.getElementById("quotePopup");
    const closeBtn = document.getElementById("closePopup");
  
    if (openBtn && popup && closeBtn) {
      openBtn.addEventListener("click", () => popup.style.display = "block");
      closeBtn.addEventListener("click", () => popup.style.display = "none");
  
      window.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
      });
    }
  });
  