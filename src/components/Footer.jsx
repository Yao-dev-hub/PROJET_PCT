import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import "../styles/footer.style.css"
import { Link } from 'react-router-dom';
import { Divider } from 'antd';

const Footer= () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=" footer text-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Quick Links Section */}
          <Col md={3}>
            <h3 className="h5 mb-3">Menu</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <Link href="/declare" className="text-light text-decoration-none">
                  Déclaration
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/recup" className="text-light text-decoration-none">
                  Récupération
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-light text-decoration-none">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </Col>

          {/* Legal Section */}
          <Col md={3}>
            <h3 className="h5 mb-3">Informations légales</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#mentions-legales" className="text-light text-decoration-none">
                  Mentions légales
                </a>
              </li>
              <li className="mb-2">
                <a href="#politique-confidentialite" className="text-light text-decoration-none">
                  Politique de confidentialité
                </a>
              </li>
              <li className="mb-2">
                <a href="#cgv" className="text-light text-decoration-none">
                  Conditions générales
                </a>
              </li>
            </ul>
          </Col>
          
          {/* Contact Section */}
          <Col md={3}>
            <h3 className="h5 mb-3">Contact</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="mailto:contact@example.com" className="text-light text-decoration-none d-flex align-items-center gap-2">
                  <Mail size={16} /> contact@example.com
                </a>
              </li>
              <li className="mb-2">123 rue de l'Innovation</li>
              <li className="mb-2">99326 Abidjan, Cote d'ivoire</li>
            </ul>
          </Col>
          
          {/* Social Media Section */}
          <Col md={3}>
            <h3 className="h5 mb-3">Suivez-nous</h3>
            <div className="d-flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </Col>
        </Row>
        
        {/* Divider */}
        <hr className="my-4 border-white" />
        {/* <Divider className='text-white'/> */}
        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <small>© MyApp {currentYear} - Tous droits réservés.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;