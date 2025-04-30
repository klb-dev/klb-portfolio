import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.min.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gi6dgvf",
        "template_fazlclo",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "tzmjfPE8fdRiFHJjG"
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        toast.success("Message has been sent successfully!");
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setFormSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Something went wrong. Please try again.");
      });
  };

  const contactInfo = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      title: "Email",
      value: "klbdev88@gmail.com",
      link: "mailto:klbdev88@gmail.com",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      title: "Phone",
      value: "+1 (512)960-5108",
      link: "tel:+15129605108",
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      title: "Location",
      value: "Pleasanton, TX, USA",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="contact">
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Let's Talk</h3>
            <p className="info-description">
              Reach out through the form and I'll get back to you as soon as
              possible.
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4 className="info-item-title">{item.title}</h4>
                    <a href={item.link} className="info-item-value">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <a
                href="https://github.com/klb-dev?tab=repositories"
                className="social-link"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <div className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/karen-byrd-dev88/"
                className="social-link"
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                <div className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </a>
              <a
                href="https://bsky.app/profile/klb88.bsky.social"
                className="social-link"
                target="_blank"
              >
                <span className="sr-only">Bluesky</span>
                <div className="social-icon">
                  <FontAwesomeIcon icon={faBluesky} />
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello! I'm interested in working with you on..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
