import React from "react";
import "./education.css";

const educationList = [
  {
    institution: "University of Singaperbangsa Karawang",
    degree: "Bachelor's Degree in Informatics",
    gpa: "3.79 / 4.00",
    period: "2020 – 2025",
    location: "Karawang, Indonesia",
    details: [
      "Completed comprehensive coursework in Software Engineering, Database Systems, Computer Networks, and System Analysis.",
      "Graduated with Latin Honors distinction (GPA: 3.79/4.00), demonstrating strong analytical rigor and foundational CS knowledge."
    ]
  },
  {
    institution: "Skilvul – Kampus Merdeka (MSIB)",
    degree: "Front-End Web Development Specialization",
    gpa: "Gold Certification",
    period: "Aug 2022 – Dec 2022",
    location: "Jakarta, Indonesia (Certified)",
    details: [
      "Intensive software engineering track covering HTML5, CSS3, modern JavaScript, and ReactJS development.",
      "Collaborated in team-based agile sprints, implementing modular components, API data fetching, and responsive UI/UX principles."
    ]
  }
];

const certifications = [
  {
    title: "Basic Web Programming",
    issuer: "Dicoding Academy",
    year: "2024",
    icon: "uil-award",
    badge: "Certified"
  },
  {
    title: "Beginner Web Development (Gold)",
    issuer: "Skilvul",
    year: "2022",
    icon: "uil-medal",
    badge: "Gold Award"
  }
];

const achievements = [
  {
    title: "Jabar Future Leaders Scholarship",
    org: "Pemerintah Provinsi Jawa Barat",
    year: "2023",
    description: "Awarded competitive provincial scholarship for high academic achievement and leadership dedication."
  },
  {
    title: "2nd Place National Vlog Competition",
    org: "Government Days",
    year: "2022",
    description: "Secured national 2nd place for creative digital public communications and video storytelling."
  }
];

const leadership = [
  {
    role: "Chairman of Commission B (Communication & Info)",
    org: "Badan Legislatif Mahasiswa Unsika",
    period: "Mar 2023 – Jan 2024",
    description: "Led the media and external relations division, managed digital publications, and drove campus engagement campaigns."
  },
  {
    role: "Field Coordinator",
    org: "Informatics IT Bootcamp",
    period: "Oct 2022 – Dec 2022",
    description: "Supervised on-site event execution, resolved operational bottlenecks, and coordinated technical logistics."
  }
];

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="education__container container">
        {/* Section Header */}
        <div className="section__header">
          <span className="section__badge">05. Credentials</span>
          <h2 className="section__title">Education & Qualifications</h2>
          <p className="section__description">
            Academic degree, recognized professional certifications, scholarships, and student leadership milestones.
          </p>
        </div>

        <div className="education__grid">
          {/* Column 1: Formal Education */}
          <div className="education__col">
            <h3 className="education__col-title">
              <i className="uil uil-graduation-cap"></i>
              <span>Academic Education</span>
            </h3>

            <div className="education__cards">
              {educationList.map((edu, idx) => (
                <div key={idx} className="education__card card">
                  <div className="education__card-header">
                    <div>
                      <h4 className="education__degree">{edu.degree}</h4>
                      <span className="education__institution">{edu.institution}</span>
                    </div>
                    <span className="tag tag--accent">GPA {edu.gpa}</span>
                  </div>

                  <div className="education__card-meta">
                    <span>
                      <i className="uil uil-calendar-alt"></i> {edu.period}
                    </span>
                    <span>
                      <i className="uil uil-map-marker"></i> {edu.location}
                    </span>
                  </div>

                  <ul className="education__bullets">
                    {edu.details.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <span className="education__bullet-dot"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications, Achievements & Leadership */}
          <div className="education__col">
            <h3 className="education__col-title">
              <i className="uil uil-award"></i>
              <span>Certifications & Honors</span>
            </h3>

            {/* Certifications row */}
            <div className="education__cert-grid">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="education__cert-card card">
                  <div className="education__cert-icon">
                    <i className={`uil ${cert.icon}`}></i>
                  </div>
                  <div>
                    <h5 className="education__cert-title">{cert.title}</h5>
                    <span className="education__cert-issuer">
                      {cert.issuer} • {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scholarships & Honors */}
            <div className="education__honors-box card">
              <h4 className="education__subheading">
                <i className="uil uil-trophy"></i> Honors & Scholarships
              </h4>
              <div className="education__honors-list">
                {achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="education__honor-item">
                    <div className="education__honor-header">
                      <span className="education__honor-title">{ach.title}</span>
                      <span className="tag">{ach.year}</span>
                    </div>
                    <span className="education__honor-org">{ach.org}</span>
                    <p className="education__honor-desc">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Organization */}
            <div className="education__honors-box card">
              <h4 className="education__subheading">
                <i className="uil uil-users-alt"></i> Organizational Leadership
              </h4>
              <div className="education__honors-list">
                {leadership.map((lead, lIdx) => (
                  <div key={lIdx} className="education__honor-item">
                    <div className="education__honor-header">
                      <span className="education__honor-title">{lead.role}</span>
                      <span className="tag">{lead.period}</span>
                    </div>
                    <span className="education__honor-org">{lead.org}</span>
                    <p className="education__honor-desc">{lead.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
