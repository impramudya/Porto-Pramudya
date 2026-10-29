import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">pramudya</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portofolio" className="footer__link">Projects</a>
          </li>

          {/* <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
          </li> */}
        </ul>

        <div className="footer__social">
        <a href="https://www.facebook.com/pramvnxx/" className="footer__social-link" target="_blank" rel="noreferrer">
        <i className="bx bxl-facebook"></i>
      </a>

      <a href="https://www.instagram.com/impramudya/" className="footer__social-link" target="_blank" rel="noreferrer">
      <i className="bx bxl-instagram"></i>
      </a>

      <a href="https://github.com/impramudya" className="footer__social-link" target="_blank" rel="noreferrer">
      <i className="bx bxl-github"></i>
      </a>
        </div>
        
        <span className='footer__copy'>Last Updated : April, 10 2024 <br></br>2023 &#169; made with love - by Tegar Pramudya Pratama</span>
      </div>
    </footer>
  )
}

export default Footer
