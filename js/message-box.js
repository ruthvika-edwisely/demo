document.addEventListener("DOMContentLoaded", () => {
    const sayHi = document.getElementById("sayHi");
    const getQuote = document.getElementById("getQuote");
    const message = document.getElementById("messageField");
  
    if (sayHi && getQuote && message) {
      sayHi.addEventListener("change", () => {
        if (sayHi.checked) message.value = "";
      });
  
      getQuote.addEventListener("change", () => {
        if (getQuote.checked) {
          message.value = "We're interested in your services! Please contact us.";
        }
      });
    }
  });
  