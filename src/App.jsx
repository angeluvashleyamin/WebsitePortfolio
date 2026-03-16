import { useEffect } from "react";
import "./App.css";

function App() {

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
      { threshold: 0.6 }
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
        <h2>Blah Blah Blah</h2>
      </div>

      <div className="Section3 animate-section">
        <h1>Projects</h1>
      </div>

    </div>
  );
}

export default App;