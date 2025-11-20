document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = [
      { name: "John Doe", role: "SEO Specialist", photo: "images/p1.svg", desc: "John has over 10 years of experience in digital marketing and SEO strategy.", linkedin: "https://www.linkedin.com/in/johndoe/" },
      { name: "Emily Carter", role: "Content Strategist", photo: "images/p1.svg", desc: "Emily creates high-impact content strategies for brands.", linkedin: "https://www.linkedin.com/in/johndoe/" },
      { name: "Michael Smith", role: "PPC Expert", photo: "images/p1.svg", desc: "Michael specializes in data-driven paid advertising.", linkedin: "https://www.linkedin.com/in/johndoe/" }, 
      { name: "Sophia Williams", role: "Brand Designer", photo: "images/p1.svg", desc: "Sophia develops beautiful and effective brand identities.", linkedin: "https://www.linkedin.com/in/johndoe/" }, 
      { name: "David Lee", role: "Web Developer", photo: "images/p1.svg", desc: "David builds fast, responsive, and SEO-friendly websites.", linkedin: "https://www.linkedin.com/in/johndoe/" }, 
      { name: "Sarah Johnson", role: "Social Media Manager", photo: "images/p1.svg", desc: "Sarah increases social engagement through smart campaigns.", linkedin: "https://www.linkedin.com/in/johndoe/" }
    ];
  
    const teamGrid = document.getElementById("teamGrid");
  
    if (teamGrid) {
      teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "team-card";
        card.innerHTML = `
          <a href="${member.linkedin}" class="linkedin-icon">
            <img src="images/linkedin.svg" alt="LinkedIn" />
          </a>
          <div class="team-top">
            <img src="${member.photo}" alt="${member.name}" class="team-photo" />
            <div class="team-info">
              <h3>${member.name}</h3>
              <p>${member.role}</p>
            </div>
          </div>
          <p class="team-desc">${member.desc}</p>
        `;
        teamGrid.appendChild(card);
      });
    }
  });
  
