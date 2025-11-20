document.addEventListener("DOMContentLoaded", () => {
    

    const processSteps = [
        { number: "01", title: "Consultation", text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
        { number: "02", title: "Research and Strategy Development", text: "We analyze your industry, audience, and competitors to craft a data-driven strategy that ensures measurable success." },
        { number: "03", title: "Implementation", text: "We bring your strategy to life using the latest tools, channels, and technologies to achieve your goals effectively." },
        { number: "04", title: "Monitoring and Optimization", text: "We continuously track performance, analyze metrics, and refine strategies for maximum ROI." },
        { number: "05", title: "Reporting and Communication", text: "Transparent reporting and regular communication keep you updated on progress and insights." },
        { number: "06", title: "Continual Improvement", text: "We identify new opportunities and adapt strategies to ensure long-term success in a dynamic digital landscape." }
      ];
    
      const container = document.getElementById("processContainer");
    
      if (container) {
        processSteps.forEach(step => {
          const div = document.createElement("div");
          div.className = "process-step";
    
          div.innerHTML = `
            <div class="step-header">
              <div class="step-left">
                <span class="step-number">${step.number}</span>
                <h3>${step.title}</h3>
              </div>
              <img src="images/plus_icon.svg" alt="toggle" class="toggle-icon" />
            </div>
    
            <div class="step-content">
              <p>${step.text}</p>
            </div>
          `;
    
          container.appendChild(div);
        });
      }
    
      
      document.addEventListener("click", (e) => {
        const clicked = e.target.closest(".process-step");
        if (!clicked) return;
      
        const allSteps = document.querySelectorAll(".process-step");
      
        allSteps.forEach(step => {
          const content = step.querySelector(".step-content");
          const icon = step.querySelector(".toggle-icon");
      
          if (step === clicked) {
            
            const isOpen = step.classList.toggle("active");
      
            if (isOpen) {
              content.style.maxHeight = content.scrollHeight + "px";
              icon.src = "images/minus_icon.svg";
            } else {
              content.style.maxHeight = 0;
              icon.src = "images/plus_icon.svg";
            }
      
          } else {
            
            step.classList.remove("active");
            content.style.maxHeight = 0;
            step.querySelector(".toggle-icon").src = "images/plus_icon.svg";
          }
        });
      });
  });
  