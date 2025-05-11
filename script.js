function toggleNav() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('show');
  }
  function searchBooks() {
    const input = document.getElementById("bookSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".book-card");
  
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(input) ? "block" : "none";
    });
  }
  window.addEventListener("DOMContentLoaded", () => {
    const animated = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1
    });
  
    animated.forEach(el => observer.observe(el));
  });
  
