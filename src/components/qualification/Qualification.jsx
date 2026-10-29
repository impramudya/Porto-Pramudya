import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={ () => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={ () => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Universitas Singaperbangsa Karawang</h3>
                <span className="qualification__subtitle">Informatics</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SMAN 1 Cikampek</h3>
                <span className="qualification__subtitle">Science</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMPN 1 Jatisari</h3>
                <span className="qualification__subtitle">Science & Math</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SDN 1 Jatisari</h3>
                <span className="qualification__subtitle">Elementary</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2008 - 2014
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">PT. Saka Farma Laboratories (Kalbe)</h3>
                <span className="qualification__subtitle">Computerized System Validation Staff</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May 2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">PERURI (BUMN)</h3>
                <span className="qualification__subtitle">Fullstack Web Developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Apr 2024 - Jun 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">PT. Inti Ganda Perdana</h3>
                <span className="qualification__subtitle">Web Developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May 2023 - Nov 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">PT. Impactbyte Teknologi Edukasi</h3>
                <span className="qualification__subtitle">Web Developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2022 - Dec 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Informatics IT Bootcamp</h3>
                <span className="qualification__subtitle">Field Coordinator</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Oct 2022 - Dec 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
