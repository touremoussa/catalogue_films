import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section">
          <img
            src={`${process.env.PUBLIC_URL}/logo4.png`} 
            alt="KRM CINÉ Logo"
            className="footer-logo"
          />
          <div className="footer-copyright">
            <p>© 2024 KRM CINÉ. Tous droits réservés.</p>
            <p>
              Aucune partie de ce site ne peut être reproduite ou utilisée sans
              autorisation écrite préalable de ses propriétaires.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Liens Rapides</h4>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/categories">Catégories</Link>
            </li>
            <li>
              <Link to="/apropos">À propos</Link>
            </li>
          </ul>
        </div>

     
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-input">
            <input
              type="email"
              placeholder="Entrez votre email"
              aria-label="Email"
            />
            <button className="email-btn">Envoyer</button>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`} 
            alt="TMDB Logo"
            className="tmdb-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;