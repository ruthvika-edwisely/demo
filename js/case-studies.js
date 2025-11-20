document.addEventListener("DOMContentLoaded", () => {
    const caseStudies = [
      { text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.", link: "#", icon: "images/icon.svg" },
      { text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.", link: "#", icon: "images/icon.svg" },
      { text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.", link: "#", icon: "images/icon.svg" }
    ];
  
    const caseBox = document.getElementById("caseBox");
  
    if (caseBox) {
      caseStudies.forEach(item => {
        const div = document.createElement("div");
        div.className = "case-text";
        div.innerHTML = `
          <div class="case-p"><p>${item.text}</p></div>
          <div class="case-link">
            <a href="${item.link}">
              Learn More
              <img src="${item.icon}" alt="arrow" />
            </a>
          </div>
        `;
        caseBox.appendChild(div);
      });
    }
  });
  
