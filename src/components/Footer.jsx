import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone ,Instagram,Youtube} from 'lucide-react';
import { Link } from 'react-router-dom';
import "../styles/footer.style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="gy-4 gx-5">
          {/* Quick Links Section */}
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="h5 mb-4 text-uppercase fw-bold footer-title">Menu</h3>
              <ul className="list-unstyled footer-links">
                <li className="mb-3">
                  <Link to="/" className="text-light text-decoration-none d-flex align-items-center gap-2 hover-animate">
                    <span className="link-icon">→</span>
                    <span>Accueil</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/declare" className="text-light text-decoration-none d-flex align-items-center gap-2 hover-animate">
                    <span className="link-icon">→</span>
                    <span>Déclaration</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/recup" className="text-light text-decoration-none d-flex align-items-center gap-2 hover-animate">
                    <span className="link-icon">→</span>
                    <span>Récupération</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/contact" className="text-light text-decoration-none d-flex align-items-center gap-2 hover-animate">
                    <span className="link-icon">→</span>
                    <span>Contactez-nous</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Legal Section */}
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="h5 mb-4 text-uppercase fw-bold footer-title">Légal</h3>
              <ul className="list-unstyled footer-links">
                <li className="mb-3">
                  <a href="#mentions-legales" className="text-light text-decoration-none d-flex align-items-center gap-2 hover-animate">
                    <span className="link-icon">→</span>
                    <span>Mentions légales</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#politique-confidentialite" className="text-light text-decoration-none d-flex align-items-center gap-2 hover-animate">
                    <span className="link-icon">→</span>
                    <span>Politique de confidentialité</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#cgv" className="text-light text-decoration-none d-flex align-items-center gap-2 hover-animate">
                    <span className="link-icon">→</span>
                    <span>Conditions générales</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Contact Section */}
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="h5 mb-4 text-uppercase fw-bold footer-title">Contact</h3>
              <ul className="list-unstyled footer-contact">
                <li className="mb-3 d-flex align-items-start gap-2">
                  <MapPin size={18} className="mt-1" />
                  <div>
                    <p className="mb-0">123 rue de l'Innovation</p>
                    <p className="mb-0">99326 Abidjan, Côte d'Ivoire</p>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:contact@example.com" className="text-light text-decoration-none hover-animate">
                    contact@example.com
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+2250123456789" className="text-light text-decoration-none hover-animate">
                    +225 01 23 45 67 89
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Social Media Section */}
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="h5 mb-4 text-uppercase fw-bold footer-title">Réseaux sociaux</h3>
              <p className="mb-4">Suivez-nous pour les dernières actualités</p>
              <div className="d-flex gap-3 social-icons">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light rounded-circle d-flex align-items-center justify-content-center social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light rounded-circle d-flex align-items-center justify-content-center social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light rounded-circle d-flex align-items-center justify-content-center social-icon"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light rounded-circle d-flex align-items-center justify-content-center social-icon"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>

              {/* Newsletter */}
              <div className="mt-4 newsletter">
                <h4 className="h6 mb-3">Newsletter</h4>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control bg-transparent text-light"
                    placeholder="Votre email"
                    aria-label="Email"
                  />
                  <button className="btn btn-primary" type="button">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="my-4 border-secondary opacity-25" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-white">
              © {currentYear} MyApp - Tous droits réservés. |
              <span className="mx-2">•</span>
              Conçu avec ❤️ en Côte d'Ivoire
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;