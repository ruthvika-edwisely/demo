document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.querySelector(".send-btn");
    const toast = document.getElementById("toast");
  
    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      const nameField = document.getElementById("nameField");
      const emailField = document.getElementById("emailField");
      const messageField = document.getElementById("messageField");
  
      const fields = [
        { input: nameField, message: "Please enter your name" },
        { input: emailField, message: "Please enter a valid email address" },
        { input: messageField, message: "Please enter a message" }
      ];
  
      let isValid = true;
  
      fields.forEach(({ input, message }) => {
        const errorMsg = input.parentElement.querySelector(".error-msg");
  
        input.classList.remove("error");
        errorMsg.style.display = "none";
  
        if (input.value.trim() === "") {
          input.classList.add("error");
          errorMsg.textContent = message;
          errorMsg.style.display = "block";
          isValid = false;
        }
  
        if (input === emailField && input.value.trim() !== "") {
          const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!validEmail.test(input.value)) {
            input.classList.add("error");
            errorMsg.textContent = "Please enter a valid email address";
            errorMsg.style.display = "block";
            isValid = false;
          }
        }
      });
  
      if (isValid) {
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
      }
    });
  });
  