import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import CV from "../../assets/Tegar-CV.pdf";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_24ni2xw",
        "template_gq7hbql",
        form.current,
        "NMXMaeAlCXqwQ-bTC"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Thank you! Your message has been sent successfully.",
          });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setStatus({
            type: "error",
            message: "Failed to send message. Please reach me directly via Email or WhatsApp.",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="contact-grid">
        {/* Left Column: Richard Miculob Giant Headline & Channels */}
        <div className="contact-left">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2 className="contact-headline">
            LET'S<br />
            <span className="contact-headline-accent">WORK</span><br />
            TOGETHER
          </h2>

          <p className="contact-description">
            Open to Computerized System Validation (CSV), Quality Assurance, and Full-Stack Engineering opportunities.
          </p>

          <a
            href={CV}
            download="Tegar-CV.pdf"
            className="contact-resume-link"
          >
            <span>DOWNLOAD RESUME</span>
            <i className="uil uil-arrow-right"></i>
          </a>

          <div className="contact-channels">
            <a
              href="mailto:tegarpramudyap@gmail.com"
              className="contact-channel-item"
            >
              <span className="contact-channel-type">EMAIL</span>
              <span className="contact-channel-val">tegarpramudyap@gmail.com</span>
            </a>

            <a
              href="https://wa.me/6289630122001"
              target="_blank"
              rel="noreferrer"
              className="contact-channel-item"
            >
              <span className="contact-channel-type">WHATSAPP</span>
              <span className="contact-channel-val">+62 896 3012 2001</span>
            </a>

            <a
              href="https://github.com/impramudya"
              target="_blank"
              rel="noreferrer"
              className="contact-channel-item"
            >
              <span className="contact-channel-type">GITHUB</span>
              <span className="contact-channel-val">github.com/impramudya</span>
            </a>

            <a
              href="https://www.linkedin.com/in/tegarpramudya/"
              target="_blank"
              rel="noreferrer"
              className="contact-channel-item"
            >
              <span className="contact-channel-type">LINKEDIN</span>
              <span className="contact-channel-val">linkedin.com/in/tegarpramudya</span>
            </a>
          </div>
        </div>

        {/* Right Column: Send Me a Message Form */}
        <div className="contact-right">
          <div className="contact-form-box">
            <h3 className="contact-form-title">Send Me a Message</h3>
            <p className="contact-form-sub">
              Have a project, role, or question? Leave a note and I will get back to you promptly.
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="contact-field">
                <label className="contact-field-label">NAME</label>
                <input
                  type="text"
                  name="name"
                  className="contact-field-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-field-label">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  className="contact-field-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-field-label">MESSAGE</label>
                <textarea
                  name="project"
                  rows="5"
                  className="contact-field-input contact-field-textarea"
                  placeholder="Tell me about your project, system, or opportunity..."
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`contact-status-box contact-status-box--${status.type}`}>
                  <i className={status.type === "success" ? "uil uil-check-circle" : "uil uil-exclamation-triangle"}></i>
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-richard contact-submit-btn"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <i className="uil uil-message"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
