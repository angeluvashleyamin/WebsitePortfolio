import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Sputify",
    tag: "Web App, Music Player",
    year: "2025",
    description:
      "A simple web music player.",
    tech: ["Vite", "Node.js", "HTML", "CSS", "JavaScript"],
    link: "https://sputipay.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Site",
    tag: "Design",
    year: "2026",
    description:
      "A simple personal portfolio website",
    tech: ["React", "CSS", "HTML", "JavaScript"],
    link: "https://websiteportfolioamin.netlify.app/",
  },
  {
    id: 3,
    title: "AnonChat",
    tag: "Web App, Chat site",
    year: "2026",
    description:
      "Personal portfolio crafted with Vite + React. Emphasis on motion, typography, and a refined dark aesthetic.",
    tech: ["HTML", "CSS", "JavaScript", "SupaBase"],
    link: "https://anonchatangel.netlify.app/",
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <span className="modal-tag">{project.tag}</span>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
        <a href={project.link} className="modal-link" target="_blank" rel="noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("animate-done");
            void entry.target.offsetWidth;
            entry.target.classList.add("animate-done");
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      <div className="Section1 animate-section">
        <img src="squareimg.jpg" alt="profile" />
        <h1>Angeluv Ashley Arevalo. Amin</h1>
        <h2>Computer Science Student</h2>
        <h1 className="quotetext">" To contribute small things in my own little ways. "</h1>
      </div>

      <div className="Section2 animate-section">
        <h1>About</h1>
        <h2>
          I'm a 23-year-old Computer Science student who's usually at my computer.
          I'm still learning about tech and figuring things out step by step..
        </h2>
      </div>

      <div className="Section3 animate-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className="project-card"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              onClick={() => setSelected(p)}
            >
              <div className="card-top">
                <span className="card-tag">{p.tag}</span>
                <span className="card-year">{p.year}</span>
              </div>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-snippet">{p.description}</p>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;
