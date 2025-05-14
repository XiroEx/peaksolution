import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Logistics Company. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#services">Our Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;