const education = {
  secondary: {
    heading: "Secondary Schooling",
    year: "2018",
    data: "I completed my Secondary Schooling from the <strong>Central Board of Secondary Education (CBSE)</strong> in 2018 with 70% marks. During this time period, I got my first computer, which sparked my curiosity towards internet and the things that live on internet. What started as a casual interest gradually turned into a passion. This early exposure laid the foundation for my journey into the world of technology and web development.",
  },
  senior_secondary: {
    heading: "Senior Secondary Schooling",
    year: "2020",
    data: "I completed my Senior Secondary Schooling from the <strong>Central Board of Secondary Education (CBSE)</strong> in 2020 with 85% marks. I started exploring different career options and found myself drawn towards coding and technology. What initially felt like just curiosity soon became a serious interest. This phase further strengthened my foundation and encouraged me to pursue web development more deeply.",
  },
  graduation: {
    heading: "Graduation",
    year: "2023",
    data: "I completed my graduation in <strong>Bachelor of Arts</strong> from the <strong>School of Open Learning, Delhi University,</strong> in 2023 with First Division. This flexible mode of education allowed me to manage my studies while continuing to explore the world of technology. It was a phase where I turned my passion into consistent learning. I studied a lot about this field during that time and chose web development as my career path.",
  },
  diploma: {
    heading: "Diploma",
    year: "2025",
    data: "I completed my <strong>Diploma in Web Designing</strong> in 2025 from <strong>Lal Bahadur Shastri Training Institue</strong> with First Division. This course provided me with a solid foundation in both design and technical skills. I studied key tools and technologies such as MS Office, HTML, CSS, JavaScript, CorelDRAW. Through this program, I strengthened my practical understanding of front-end development and design principles.",
  },
};

function showContent(type, btn) {
  const content = education[type];
  const container = document.getElementById("qualification-details");

  container.style.opacity = 0;

  setTimeout(() => {
    container.innerHTML = `
      <div class="qualification-heading">
        <h3 class="noto-sans-font">${content.heading}</h3>
      </div>
      <div class="qualification-year">
        <p class="fira-mono-font">${content.year}</p>
      </div>
      <div class="qualification-data">
        <p class="noto-sans-font">${content.data}</p>
      </div>
    `;
    container.style.opacity = 1;
  }, 100);

  document
    .querySelectorAll(".education-btn")
    .forEach((b) => b.classList.remove("active-btn"));
  btn.classList.add("active-btn");
}

// Fade effect
const elements = document.querySelectorAll(".animate-on-scroll");

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.9;

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerPoint) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // Optional: remove to re-animate
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // also run on page load

function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "block"
}
function closeSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
}