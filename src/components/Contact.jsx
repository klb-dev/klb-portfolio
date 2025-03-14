import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  const contactInfo = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      title: 'Email',
      value: 'klbdev88@gmail.com',
      link: 'mailto:klbdev88@gmail.com'
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      title: 'Phone',
      value: '+1 (512)960-5108',
      link: 'tel:+15129605108'
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      title: 'Location',
      value: 'Pleasanton, TX, USA',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Let's Talk</h3>
            <p className="info-description">
             Reach out through the form and I'll get back to you as soon as possible.
            </p>
            
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4 className="info-item-title">{item.title}</h4>
                    <a href={item.link} className="info-item-value">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <a href="https://github.com/klb-dev" className="social-link" target="_blank">
                <span className="sr-only">GitHub</span>
                <div className="social-icon"><FontAwesomeIcon icon={faGithub} /></div>
              </a>
              <a href="https://www.linkedin.com/in/karen-byrd-dev88/" className="social-link" target="_blank">
                <span className="sr-only">LinkedIn</span>
                <div className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></div>
              </a>
              <a href="https://bsky.app/profile/klb88.bsky.social" className="social-link" target="_blank">
                <span className="sr-only">Bluesky</span>
                <div className="social-icon"><FontAwesomeIcon icon={faBluesky} /></div>
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
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          padding: var(--spacing-xl) 0;
          background-color: var(--light-bg);
          position: relative;
          overflow: hidden;
        }
        
        .contact:before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(255, 214, 0, 0.05) 0%,
            transparent 70%
          );
          z-index: 0;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--spacing-lg);
          position: relative;
          z-index: 1;
        }
        
        .contact-info {
          background-color: var(--background);
          border-radius: var(--border-radius);
          padding: var(--spacing-md);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 100px;
          height: max-content;
        }
        
        .info-title {
          font-size: 1.8rem;
          margin-bottom: var(--spacing-sm);
          color: var(--primary);
        }
        
        .info-description {
          color: var(--light-text);
          margin-bottom: var(--spacing-md);
          line-height: 1.6;
        }
        
        .info-items {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm);
          background-color: var(--light-bg);
          border-radius: var(--border-radius);
          transition: transform 0.3s ease;
        }
        
        .info-item:hover {
          transform: translateX(5px);
        }
        
        .info-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 50%;
        }
        
        .info-content {
          flex: 1;
        }
        
        .info-item-title {
          font-size: 0.9rem;
          color: var(--light-text);
          margin-bottom: 4px;
        }
        
        .info-item-value {
          font-size: 1rem;
          color: var(--text);
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .info-item-value:hover {
          color: var(--primary);
        }
        
        .social-links {
          display: flex;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-md);
        }
        
        .social-link {
          display: block;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--light-bg);
          color: var(--text);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          transform: translateY(-3px);
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        .contact-form-container {
          background-color: var(--background);
          border-radius: var(--border-radius);
          padding: var(--spacing-md);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        
        .form-group {
          margin-bottom: var(--spacing-sm);
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--text);
        }
        
        input,
        textarea {
          width: 100%;
          padding: 12px 16px;
          background-color: var(--light-bg);
          border: 1px solid transparent;
          border-radius: var(--border-radius);
          color: var(--text);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        input:focus,
        textarea:focus {
          border-color: var(--secondary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.2);
        }
        
        textarea {
          resize: vertical;
        }
        
        .submit-btn {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: var(--spacing-sm);
          align-self: flex-start;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .success-message {
          text-align: center;
          padding: var(--spacing-md);
        }
        
        .success-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          color: white;
          margin: 0 auto var(--spacing-sm);
        }
        
        .success-message h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-sm);
          color: var(--primary);
        }
        
        .success-message p {
          color: var(--light-text);
        }
        
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-info {
            position: static;
          }
        }
        
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .submit-btn {
            width: 100%;
            align-self: stretch;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;