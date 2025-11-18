document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------
      POPUP OPEN / CLOSE
  ----------------------------------- */
  const openBtn = document.getElementById("getQuoteBtn");
  const popup = document.getElementById("quotePopup");
  const closeBtn = document.getElementById("closePopup");

  if (openBtn && popup && closeBtn) {
    openBtn.addEventListener("click", () => {
      popup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none";
    });
  }

  /* -----------------------------------
      SERVICES GRID GENERATOR
  ----------------------------------- */
  const servicesData = [
    { bg: "light",     tags: ["Search Engine", "Optimization"], tagColor: "green", image: "images/seo.svg", icon: "images/icon.svg" },
    { bg: "green-bg",  tags: ["Search Engine", "Optimization"], tagColor: "white", image: "images/seo.svg", icon: "images/icon.svg" },
    { bg: "dark",      tags: ["Search Engine", "Optimization"], tagColor: "white", image: "images/seo.svg", icon: "images/icon11.png" },
    { bg: "light",     tags: ["Search Engine", "Optimization"], tagColor: "green", image: "images/seo.svg", icon: "images/icon.svg" },
    { bg: "green-bg",  tags: ["Search Engine", "Optimization"], tagColor: "white", image: "images/seo.svg", icon: "images/icon.svg" },
    { bg: "dark",      tags: ["Search Engine", "Optimization"], tagColor: "white", image: "images/seo.svg", icon: "images/icon11.png" }
  ];


  const carouselData = []

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

          <div class="service-footer">
            <img src="${service.icon}" alt="icon"/>
            <span>Learn More</span>
          </div>
        </div>

        <img src="${service.image}" alt="SEO Illustration" class="lm">
      `;

      grid.appendChild(card);
    });
  }

  /* -----------------------------------
      SLIDER
  ----------------------------------- */
  // Robust infinite slider JS (replace existing slider JS with this)
  const track = document.querySelector(".slider-track");
  const realSlides = Array.from(document.querySelectorAll(".slide"));
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const dots = document.querySelectorAll(".dot");
  
  const slideWidth = 64; // 60% + 2% + 2%
  
  console.log('real slides',realSlides);
  // Clone first and last slides
  const firstClone = realSlides[0].cloneNode(true);
  console.log('first clone',firstClone);
  const lastClone = realSlides[realSlides.length - 1].cloneNode(true);
  console.log('last clone',lastClone);
  firstClone.classList.add("clone");
  lastClone.classList.add("clone");
  
  // Add clones to track
  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstChild);
  console.log('track',track)
  const allSlides = document.querySelectorAll(".slide");
  console.log('all slides',allSlides);
  let index = 1; // Start at the first REAL slide
  let allowShift = true;
  
  // Set initial position
  track.style.transform = `translateX(-${index * slideWidth}%)`;
  console.log('index: ',index);
  function moveToSlide() {
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${index * slideWidth}%)`;
    updateDots();
  }
  
  function updateDots() {
    const realIndex = (index - 1 + realSlides.length) % realSlides.length;
    console.log('real index: ',realIndex);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === realIndex);
    });
  }
  
  nextBtn.addEventListener("click", () => {
    if (!allowShift) return;
    allowShift = false;
  
    index++;
    moveToSlide();
  });
  
  prevBtn.addEventListener("click", () => {
    if (!allowShift) return;
    allowShift = false;
  
    index--;
    moveToSlide();
  });
  
  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      if (!allowShift) return;
  
      allowShift = false;
      index = i + 1; // dot 0 → slide 1
      moveToSlide();
    });
  });
  
  // Handle infinite looping after transition
  track.addEventListener("transitionend", () => {
    track.style.transition = "none";
  
    if (allSlides[index].classList.contains("clone")) {
      if (index === allSlides.length - 1) {
        // At the appended clone (first slide clone)
        index = 1;
      } else if (index === 0) {
        // At the prepended clone (last slide clone)
        index = realSlides.length;
      }
      track.style.transform = `translateX(-${index * slideWidth}%)`;
    }
  
    // small delay before allowing next shift again
    setTimeout(() => {
      allowShift = true;
    }, 20);
  });
  
  /* -----------------------------------
      MESSAGE BOX AUTO FILL
  ----------------------------------- */
  const sayHi = document.getElementById("sayHi");
  const getQuote = document.getElementById("getQuote");
  const message = document.getElementById("messageBox");

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

  /* -----------------------------------
      CASE STUDIES GENERATOR
  ----------------------------------- */
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
        <div class="case-p">
          <p>${item.text}</p>
        </div>
        <div class="case-link">
          <a href="${item.link}">
            Learn More
            <img src="${item.icon}" alt="arrow icon" />
          </a>
        </div>
      `;

      caseBox.appendChild(div);
    });
  }

  /* -----------------------------------
      WORKING PROCESS GENERATOR + ACCORDION
  ----------------------------------- */
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

  /* ACCORDION CLICK */
  document.addEventListener("click", (e) => {
    const clicked = e.target.closest(".process-step");
    if (!clicked) return;
  
    const allSteps = document.querySelectorAll(".process-step");
  
    allSteps.forEach(step => {
      const content = step.querySelector(".step-content");
      const icon = step.querySelector(".toggle-icon");
  
      if (step === clicked) {
        // toggle the clicked one
        const isOpen = step.classList.toggle("active");
  
        if (isOpen) {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.src = "images/minus_icon.svg";
        } else {
          content.style.maxHeight = 0;
          icon.src = "images/plus_icon.svg";
        }
  
      } else {
        // close all others
        step.classList.remove("active");
        content.style.maxHeight = 0;
        step.querySelector(".toggle-icon").src = "images/plus_icon.svg";
      }
    });
  });
  const teamMembers = [
    {
      name: "John Doe",
      role: "SEO Specialist",
      photo: "images/p1.svg",
      desc: "John has over 10 years of experience in digital marketing and SEO strategy.",
      linkedin: "#"
    },
    {
      name: "Emily Carter",
      role: "Content Strategist",
      photo: "images/p1.svg",
      desc: "Emily creates high-impact content strategies for brands.",
      linkedin: "#"
    },
    {
      name: "Michael Smith",
      role: "PPC Expert",
      photo: "images/p1.svg",
      desc: "Michael specializes in data-driven paid advertising.",
      linkedin: "#"
    },
    {
      name: "Sophia Williams",
      role: "Brand Designer",
      photo: "images/p1.svg",
      desc: "Sophia develops beautiful and effective brand identities.",
      linkedin: "#"
    },
    {
      name: "David Lee",
      role: "Web Developer",
      photo: "images/p1.svg",
      desc: "David builds fast, responsive, and SEO-friendly websites.",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      role: "Social Media Manager",
      photo: "images/p1.svg",
      desc: "Sarah increases social engagement through smart campaigns.",
      linkedin: "#"
    }
  ];
  
  const teamGrid = document.getElementById("teamGrid");
  
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
  

});

