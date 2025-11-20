document.addEventListener("DOMContentLoaded", () => {
    
    const testimonials = [
        {
          text: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.”",
          name: "John Smith",
          role: "Marketing Director at XYZ Corp"
        },
        {
          text: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.”",
          name: "Jane Doe",
          role: "CEO of AlphaTech"
        },
        {
          text: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.”",
          name: "Sarah Wilson",
          role: "Founder at NovaTech"
        },
        {
          text: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.”",
          name: "Mark Taylor",
          role: "COO at StarEdge"
        },
        {
          text: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.”",
          name: "Michael Brown",
          role: "Founder at BrightWave"
        }
      ];
      
      const track = document.querySelector(".slider-track");
      const dotsContainer = document.querySelector(".dots");
      const nextBtn = document.querySelector(".next");
      const prevBtn = document.querySelector(".prev");

      let slideWidth = window.innerWidth <= 768 ? 98 : 54;

      
      //const slideWidth = 54;  60% + 2% + 2%
      
      // -------------------------------------
      // 2. Generate slides + dots dynamically
      // -------------------------------------
      testimonials.forEach((item, i) => {
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.innerHTML = `
            <div class="card">
              <p>${item.text}</p>
              <h4>${item.name}</h4>
              <span>${item.role}</span>
            </div>
        `;
        track.appendChild(slide);
      
        const dot = document.createElement("span");
        dot.className = "dot";
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
      });
      
      const realSlides = Array.from(document.querySelectorAll(".slide"));
      
      // ----------------------------
      // 3. Add infinite-loop clones
      // ----------------------------
      const firstClone = realSlides[0].cloneNode(true);
      const lastClone = realSlides[realSlides.length - 1].cloneNode(true);
      
      firstClone.classList.add("clone");
      lastClone.classList.add("clone");
      
      track.appendChild(firstClone);
      track.insertBefore(lastClone, track.firstChild);
      
      const allSlides = document.querySelectorAll(".slide");
      
      // ----------------------------------
      // 4. Slider functionality
      // ----------------------------------
      let index = 1;
      let allowShift = true;
      
      // Initial position
      track.style.transform = `translateX(-${index * slideWidth}%)`;
      
      function moveToSlide() {
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${index * slideWidth}%)`;
        updateDots();
      }
      
      function updateDots() {
        const dots = document.querySelectorAll(".dot");
        const realIndex = (index - 1 + realSlides.length) % realSlides.length;
      
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === realIndex);
        });
      }
      
      // Next
      nextBtn.addEventListener("click", () => {
        if (!allowShift) return;
        allowShift = false;
        index++;
        moveToSlide();
      });
      
      // Prev
      prevBtn.addEventListener("click", () => {
        if (!allowShift) return;
        allowShift = false;
        index--;
        moveToSlide();
      });
      
      // Dot navigation
      document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.addEventListener("click", () => {
          if (!allowShift) return;
          allowShift = false;
          index = i + 1;
          moveToSlide();
        });
      });
      
      // Infinite-loop jump
      track.addEventListener("transitionend", () => {
        track.style.transition = "none";
      
        if (allSlides[index].classList.contains("clone")) {
          if (index === allSlides.length - 1) {
            index = 1;
          } else if (index === 0) {
            index = realSlides.length;
          }
          track.style.transform = `translateX(-${index * slideWidth}%)`;
        }
      
        setTimeout(() => allowShift = true, 20);
      });
  });
  