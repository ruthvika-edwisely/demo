document.addEventListener("DOMContentLoaded", () => {
    const servicesData = [
      { bg: "light", tags: ["Search Engine", "Optimization"], tagColor: "green", image: "images/seo1.svg", icon: "images/icon.svg", link: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { bg: "green-bg", tags: ["Pay-per-click", "advertising"], tagColor: "white", image: "images/ppc.svg", icon: "images/icon.svg", link: "https://corporatefinanceinstitute.com/resources/valuation/pay-per-click-ppc/" },
      { bg: "dark", tags: ["Social Media", "Marketing"], tagColor: "white", image: "images/smm.svg", icon: "images/icon11.png", link: "https://www.upgrad.com/" },
      { bg: "light", tags: ["Email", "Marketing"], tagColor: "green", image: "images/em.svg", icon: "images/icon.svg", link: "https://mailchimp.com/marketing-glossary/email-marketing/" },
      { bg: "green-bg", tags: ["Content", "Creation"], tagColor: "white", image: "images/cc.svg", icon: "images/icon.svg", link: "https://www.conductor.com/academy/content-creation/" },
      { bg: "dark", tags: ["Analytics and", "Tracking"], tagColor: "white", image: "images/at.svg", icon: "images/icon11.png", link: "https://marketingplatform.google.com/about/analytics/" }
    ];
  
    const grid = document.getElementById("servicesGrid");
  
    if (grid) {
      servicesData.forEach(service => {
        const card = document.createElement("div");
        card.className = `service-card ${service.bg}`;
  
        card.innerHTML = `
          <div class="service-left">
            <div class="service-header">
              <span class="service-tag ${service.tagColor}">${service.tags[0]}</span>
              <span class="service-tag ${service.tagColor}">${service.tags[1]}</span>
            </div>
  
            <a class="service-footer" href="${service.link}">
              <img src="${service.icon}" alt="icon"/>
              <span>Learn More</span>
            </a>
          </div>
          <img src="${service.image}" class="lm" alt="" />
        `;
        grid.appendChild(card);
      });
    }
  });
  