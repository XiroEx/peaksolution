import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="contact-form" id="contact">
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div>
        <h2>Get in Touch</h2>
        <p style={{ color: '#000' }}>
          If you have any questions or need assistance, feel free to reach out to us. 
          We are here to help! Whether you have inquiries about our services, need 
          support with an issue, or just want to share your feedback, don't hesitate 
          to contact us. Your satisfaction is our priority, and we look forward to 
          hearing from you!
        </p>
        <img src="https://www.wwex.com/wp-content/uploads/sites/3/2023/04/Freight-Carrier-Service-Map.png" 
          alt="Contact Us" 
          className="map"/>
      </div>
    </div>
  );
};

export default ContactForm;