const { name, initials, role, tagline, summary, email, location, github, linkedin, resumePath } =
  PORTFOLIO;

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderHero() {
  document.getElementById("hero").innerHTML = `
    <div class="container hero-grid">
      <div class="hero-content">
        <p class="hero-greeting">Hello, I'm</p>
        <h1>${escapeHtml(name)}</h1>
        <p class="hero-tagline">${escapeHtml(role)} · ${escapeHtml(tagline)}</p>
        <p class="hero-summary">${escapeHtml(summary)}</p>
        <div class="hero-actions">
          <a href="${escapeHtml(resumePath)}" class="btn btn-primary" download>Download Resume</a>
          <a href="#contact" class="btn btn-outline">Get in Touch</a>
        </div>
        <div class="hero-links">
          <a href="${escapeHtml(github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="${escapeHtml(linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:${escapeHtml(email)}">Email</a>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="avatar-placeholder"><span>${escapeHtml(initials)}</span></div>
      </div>
    </div>
  `;
}

function renderSkills() {
  const groups = PORTFOLIO.skills
    .map(
      (group) => `
        <div class="skill-group card">
          <h3>${escapeHtml(group.category)}</h3>
          <ul class="tag-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `
    )
    .join("");

  document.getElementById("skills").innerHTML = `
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <p class="section-subtitle">Technologies and concepts I'm learning and applying</p>
      <div class="cards-grid">${groups}</div>
    </div>
  `;
}

function renderProjects() {
  const cards = PORTFOLIO.projects
    .map((project) => {
      const links = [
        project.github
          ? `<a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`
          : "",
        project.demo
          ? `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>`
          : "",
      ]
        .filter(Boolean)
        .join("");

      return `
        <article class="card project-card">
          <div class="card-header">
            <div>
              <h3>${escapeHtml(project.title)}</h3>
              <p class="card-meta">${escapeHtml(project.period)}</p>
            </div>
          </div>
          <p>${escapeHtml(project.description)}</p>
          <ul class="tag-list">
            ${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
          </ul>
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </article>
      `;
    })
    .join("");

  document.getElementById("projects").innerHTML = `
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">Academic work, personal builds, and learning milestones</p>
      <div class="cards-grid">${cards}</div>
    </div>
  `;
}

function renderEducation() {
  const items = PORTFOLIO.education
    .map(
      (entry) => `
        <article class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content card">
            <div class="card-header">
              <div>
                <h3>${escapeHtml(entry.degree)}</h3>
                <p class="card-meta">${escapeHtml(entry.institution)} · ${escapeHtml(entry.period)}</p>
              </div>
              ${entry.badge ? `<span class="badge">${escapeHtml(entry.badge)}</span>` : ""}
            </div>
            <p>${escapeHtml(entry.description)}</p>
            <ul class="tag-list">
              ${entry.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("education").innerHTML = `
    <div class="container">
      <h2 class="section-title">Education</h2>
      <p class="section-subtitle">My academic journey in computer science</p>
      <div class="timeline">${items}</div>
    </div>
  `;
}

function renderExperience() {
  const cards = PORTFOLIO.experience
    .map(
      (entry) => `
        <article class="card">
          <div class="card-header">
            <div>
              <h3>${escapeHtml(entry.title)}</h3>
              <p class="card-meta">${escapeHtml(entry.organization)} · ${escapeHtml(entry.period)}</p>
            </div>
          </div>
          <p>${escapeHtml(entry.description)}</p>
          <ul class="tag-list">
            ${entry.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  document.getElementById("experience").innerHTML = `
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <p class="section-subtitle">Campus involvement, learning, and hands-on exposure</p>
      <div class="cards-grid">${cards}</div>
    </div>
  `;
}

function renderContact() {
  document.getElementById("contact").innerHTML = `
    <div class="container contact-grid">
      <div class="contact-info">
        <h2 class="section-title">Contact</h2>
        <p class="section-subtitle">Open to internships, collaborations, and learning opportunities.</p>
        <ul class="contact-list">
          <li>
            <span class="contact-label">Email</span>
            <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
          </li>
          <li>
            <span class="contact-label">Location</span>
            <span>${escapeHtml(location)}</span>
          </li>
          <li>
            <span class="contact-label">LinkedIn</span>
            <a href="${escapeHtml(linkedin)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkedin.replace("https://", ""))}</a>
          </li>
          <li>
            <span class="contact-label">GitHub</span>
            <a href="${escapeHtml(github)}" target="_blank" rel="noopener noreferrer">${escapeHtml(github.replace("https://", ""))}</a>
          </li>
        </ul>
      </div>
      <form class="contact-form card" id="contact-form">
        <h3>Send a message</h3>
        <label>
          Name
          <input type="text" name="name" required placeholder="Your name">
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder="you@example.com">
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required placeholder="Hi, I'd like to connect about..."></textarea>
        </label>
        <button type="submit" class="btn btn-primary">Send via Email</button>
        <p class="form-note">Opens your email client with a pre-filled message.</p>
      </form>
    </div>
  `;
}

function renderFooter() {
  document.getElementById("nav-logo").textContent = name.split(" ")[0];
  document.getElementById("footer-text").innerHTML =
    `&copy; ${new Date().getFullYear()} ${escapeHtml(name)}. Built with HTML, CSS & JavaScript.`;

  const resumeLinks = document.querySelectorAll('a[href="assets/resume.pdf"], #footer-resume, .btn-nav-resume');
  resumeLinks.forEach((link) => {
    link.setAttribute("href", resumePath);
  });
}

function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const senderName = formData.get("name");
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio contact from ${senderName}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}

renderHero();
renderSkills();
renderProjects();
renderEducation();
renderExperience();
renderContact();
renderFooter();
initNavigation();
initContactForm();
