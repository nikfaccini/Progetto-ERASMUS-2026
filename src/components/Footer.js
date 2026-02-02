import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-brand">MyShop</span>
        <span className="footer-text">
          © {new Date().getFullYear()} · Tutti i diritti riservati
        </span>
      </div>
    </footer>
  );
};

export default Footer;
