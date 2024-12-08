document.addEventListener("DOMContentLoaded", () => {
    // Reusable function to animate elements on scroll
    const animateOnScroll = (itemsClass) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible"); // Add 'visible' class when in view
              console.log('Item is in view');
            }
          });
        },
        { threshold: 0.2 }
      );
  
      const items = document.querySelectorAll(itemsClass);
      items.forEach((item) => observer.observe(item));
    };
  
    // Scroll Animation for Index Page
    if (document.body.classList.contains("home-page")) {
      console.log("Home Page detected");
      animateOnScroll(".home-item");
    }
  
    // Scroll Animation for Experience Page
    if (document.body.classList.contains("experience-page")) {
      console.log("Experience Page detected");
      animateOnScroll(".home-item");  // Apply animation to timeline items
    }
  
    // Scroll Animation for Projects Page
    if (document.body.classList.contains("projects-page")) {
      console.log("Projects Page detected");
      animateOnScroll(".projects-item");  // Animate the .projects-item class
      animateOnScroll(".carousel-slide"); // Animate individual carousel slides
    }
  
    // Carousel Functionality for Projects Page
    if (document.body.classList.contains("projects-page")) {
      console.log("Projects Page detected");
      const slides = document.querySelectorAll(".carousel-slide");
      const prevButton = document.querySelector(".carousel-control.prev");
      const nextButton = document.querySelector(".carousel-control.next");
  
      let currentIndex = 0;
  
      const updateSlides = () => {
        console.log("Current Index:", currentIndex);
        slides.forEach((slide, index) => {
          slide.classList.remove("active"); // Remove 'active' class from all slides
          if (index === currentIndex) {
            slide.classList.add("active"); // Add 'active' class to current slide
          }
        });
      };
  
      prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Previous slide
        console.log("Previous Slide:", currentIndex);
        updateSlides();
      });
  
      nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length; // Next slide
        console.log("Next Slide:", currentIndex);
        updateSlides();
      });
  
      // Initialize the first slide
      updateSlides();
    }
  });
   
      
  