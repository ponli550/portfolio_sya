// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Make the heading fade in and bounce
  const heading = document.querySelector("h1");
  heading.style.opacity = 0;
  heading.style.transition = "opacity 2s, transform 2s";
  setTimeout(() => {
    heading.style.opacity = 1;
    heading.style.transform = "scale(1.1)";
    setTimeout(() => (heading.style.transform = "scale(1)"), 1000);
  }, 500);
  
  // Add moving animation to video background
  const videoBackground = document.querySelector(".video-background");
  let position = 0;
  setInterval(() => {
    position += 0.1;
    videoBackground.style.backgroundPosition = `${position}% ${position}%`;
  }, 100);
  
  // Highlight list items on hover
  const listItems = document.querySelectorAll("ul li");
  listItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.color = "yellow";
      item.style.transform = "scale(1.1)";
      item.style.transition = "transform 0.3s, color 0.3s";
    });
    item.addEventListener("mouseout", () => {
      item.style.color = "";
      item.style.transform = "scale(1)";
    });
  });
  
  // Add dynamic content to the page
  const contentDiv = document.querySelector("content");
  const newParagraph = document.createElement("p");
  newParagraph.textContent =
    "Welcome to this interactive webpage! Scroll down for more surprises.";
  newParagraph.style.fontSize = "1.2em";
  newParagraph.style.animation = "fadeIn 3s";
  contentDiv.appendChild(newParagraph);
  
  // Show popup message on click
  document.querySelector("body").addEventListener("click", () => {
    const popup = document.createElement("div");
    popup.textContent = "You clicked the page!";
    popup.style.position = "absolute";
    popup.style.top = `${Math.random() * 80 + 10}%`;
    popup.style.left = `${Math.random() * 80 + 10}%`;
    popup.style.backgroundColor = "#241e22";
    popup.style.color = "#c7a9bf";
    popup.style.padding = "10px";
    popup.style.borderRadius = "8px";
    popup.style.animation = "fadeOut 3s forwards";
    document.body.appendChild(popup);
  
    setTimeout(() => popup.remove(), 3000);
  });
  
  // Add a typing effect to the subheading
  const subheading = document.querySelector("h2");
  const text = subheading.textContent;
  subheading.textContent = "";
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      subheading.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
  
  // Add keyframe animations
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  