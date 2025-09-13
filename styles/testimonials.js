// Vanilla JS for testimonials carousel
const testimonials = [
  {
    logo: "https://instant.pxcode.io/api/pages/3f625c21-03b6-473a-a720-709b0a3f098e/images/2_278.svg",
    quote: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
    avatar: "https://instant.pxcode.io/api/pages/3f625c21-03b6-473a-a720-709b0a3f098e/images/2_283.svg",
    name: "John Doe",
    title: "Ui designer"
  },
  {
    logo: "https://instant.pxcode.io/api/pages/03cf1494-4c59-49bc-8610-2415ab8a1003/images/522_266.svg",
    quote: "Slate helps me organize my freelance work and keep my clients happy.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alex Smith",
    title: "Freelance Developer"
  },
  {
    logo: "https://instant.pxcode.io/api/pages/03cf1494-4c59-49bc-8610-2415ab8a1003/images/eb4e12bf7b687783fd6728fe643e6d03dac5c0d0.png",
    quote: "The best tool for managing my time and projects as a designer.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Maria Garcia",
    title: "Product Designer"
  }
];

let current = 0;
const testimonialCard = document.getElementById("testimonial-card");
const dotsContainer = document.getElementById("pagination-dots");

function renderTestimonial(idx) {
  const t = testimonials[idx];
  testimonialCard.style.opacity = 0;
  setTimeout(() => {
    testimonialCard.innerHTML = `
      <img src="${t.logo}" alt="Brand logo" class="brand-logo" />
      <blockquote class="testimonial-quote">
        <p>${t.quote}</p>
      </blockquote>
      <figure class="client-info">
        <img src="${t.avatar}" alt="Portrait of ${t.name}" class="client-avatar" />
        <figcaption class="client-details">
          <cite class="client-name">${t.name}</cite>
          <span class="client-title">${t.title}</span>
        </figcaption>
      </figure>
    `;
    testimonialCard.style.opacity = 1;
    updateDots();
  }, 200);
}

function updateDots() {
  dotsContainer.innerHTML = testimonials.map((_, i) =>
    `<button class="dot ${i === current ? 'dot-blue' : 'dot-bordered'}" aria-label="Go to slide ${i+1}" data-idx="${i}"></button>`
  ).join("");
  Array.from(dotsContainer.children).forEach(btn => {
    btn.onclick = () => {
      current = +btn.dataset.idx;
      renderTestimonial(current);
    };
  });
}

document.querySelector(".carousel-btn.prev").onclick = () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(current);
};
document.querySelector(".carousel-btn.next").onclick = () => {
  current = (current + 1) % testimonials.length;
  renderTestimonial(current);
};

// Initial render
renderTestimonial(current);
