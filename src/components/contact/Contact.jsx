import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending your message..." });

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
            state: "success",
            message: "Thank you! Your message has been sent successfully.",
          });
          e.target.reset();
        },
        (error) => {
          setStatus({
            state: "error",
            message: "Failed to send message. Please contact me directly via email.",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        {/* Section Header */}
        <div className="section__header">
          <span className="section__badge">06. Connect</span>
          <h2 className="section__title">Get In Touch</h2>
          <p className="section__description">
            Feel free to reach out for computerized system validation projects, engineering roles, or collaboration.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Details Card */}
          <div className="contact__info">
            <h3 className="contact__info-heading">Direct Contact</h3>
            <p className="contact__info-desc">
              I am open to on-site, hybrid, and remote opportunities across Karawang, Bekasi, Jakarta, or worldwide.
            </p>

            <div className="contact__cards">
              {/* Email */}
              <a
                href="mailto:tegarpramudyap@gmail.com"
                className="contact__channel-card card"
              >
                <div className="contact__channel-icon">
                  <i className="uil uil-envelope"></i>
                </div>
                <div className="contact__channel-data">
                  <span className="contact__channel-label">Email Address</span>
                  <span className="contact__channel-val">tegarpramudyap@gmail.com</span>
                </div>
                <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
              </a>

              {/* WhatsApp / Phone */}
              <a
                href="https://wa.me/6289630122001"
                target="_blank"
                rel="noreferrer"
                className="contact__channel-card card"
              >
                <div className="contact__channel-icon">
                  <i className="uil uil-whatsapp"></i>
                </div>
                <div className="contact__channel-data">
                  <span className="contact__channel-label">Phone & WhatsApp</span>
                  <span className="contact__channel-val">+62 896 3012 2001</span>
                </div>
                <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tegarpramudya/"
                target="_blank"
                rel="noreferrer"
                className="contact__channel-card card"
              >
                <div className="contact__channel-icon">
                  <i className="uil uil-linkedin"></i>
                </div>
                <div className="contact__channel-data">
                  <span className="contact__channel-label">LinkedIn</span>
                  <span className="contact__channel-val">linkedin.com/in/tegarpramudya</span>
                </div>
                <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/impramudya"
                target="_blank"
                rel="noreferrer"
                className="contact__channel-card card"
              >
                <div className="contact__channel-icon">
                  <i className="uil uil-github"></i>
                </div>
                <div className="contact__channel-data">
                  <span className="contact__channel-label">GitHub</span>
                  <span className="contact__channel-val">github.com/impramudya</span>
                </div>
                <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact__form-box card">
            <h3 className="contact__form-heading">Send a Message</h3>
            <p className="contact__form-sub">
              Leave your contact details and message below, and I will get back to you promptly.
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="user_name" className="contact__label">
                  Your Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="user_email" className="contact__label">
                  Your Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="user_message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="user_message"
                  name="project"
                  rows="5"
                  required
                  placeholder="Tell me about your project, inquiry, or opportunity..."
                  className="contact__input contact__textarea"
                ></textarea>
              </div>

              {/* Status Banner */}
              {status.state !== "idle" && (
                <div
                  className={`contact__status ${
                    status.state === "success"
                      ? "contact__status--success"
                      : status.state === "error"
                      ? "contact__status--error"
                      : "contact__status--loading"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === "loading"}
                className="btn btn-primary contact__submit-btn"
              >
                {status.state === "loading" ? (
                  <>
                    <i className="uil uil-spinner-alt"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="uil uil-message"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
