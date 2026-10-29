import React from "react";
import "./education.css";

const awardsData = [
  {
    title: "Latin Honors Graduate (Cum Laude Distinction)",
    org: "Universitas Singaperbangsa Karawang (UNSIKA)",
    year: "2025",
    desc: "Graduated with Latin Honors distinction in Informatics, reflecting rigorous computer science coursework, software analysis, and academic distinction.",
    badge: "Honors Distinction",
    icon: "uil-graduation-cap",
  },
  {
    title: "Jabar Future Leaders Scholarship Awardee",
    org: "Pemerintah Provinsi Jawa Barat",
    year: "2023",
    desc: "Highly competitive provincial scholarship awarded based on academic excellence, leadership track record, and social impact potential.",
    badge: "Government Scholarship",
    icon: "uil-award",
  },
  {
    title: "Beginner Web Development Gold Certification",
    org: "Skilvul Kampus Merdeka MSIB",
    year: "2022",
    desc: "Awarded Gold distinction for outstanding technical execution in React.js, modern JavaScript, and responsive web component development.",
    badge: "Gold Award",
    icon: "uil-medal",
  },
  {
    title: "2nd Place National Vlog Competition",
    org: "National Creative Media Competition",
    year: "2022",
    desc: "National achievement in digital storytelling, video editing, and creative multimedia production.",
    badge: "National Winner",
    icon: "uil-trophy",
  },
];

const Education = () => {
  return (
    <section id="awards" className="section">
      <div className="awards-header">
        <span className="section-label">Recognition</span>
        <h2 className="section-title">Awards & Achievements</h2>
        <p className="section-desc">
          A collection of academic, government, and professional recognitions that reflect dedication to excellence.
        </p>
      </div>

      <div className="awards-grid">
        {awardsData.map((award, idx) => (
          <div key={idx} className="award-card">
            <div className="award-card-header">
              <div className="award-icon-box">
                <i className={`uil ${award.icon}`}></i>
              </div>
              <span className="award-badge">{award.badge}</span>
            </div>

            <div className="award-card-body">
              <div className="award-year-tag">{award.year}</div>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-org">{award.org}</p>
              <p className="award-desc">{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
