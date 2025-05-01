import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FileText, Play, Users, Shield, Clock, Phone } from 'lucide-react';
import "../styles/Hero.style.css"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="hero-section py-5">
        <Container className="position-relative">
          <Row className="align-items-center min-vh-75">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h1 className="fw-bold display-4 mb-3">
                  Simplifiez la gestion des actes d'état civil
                </h1>
                <p className="lead text-secondary mb-4">
                  Déclarez et consultez les actes de naissance, mariage et décès en quelques clics.
                </p>
                <div className="buttons-wrapper d-flex flex-wrap gap-3">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="d-inline-flex align-items-center shadow-sm"
                  >
                    <FileText size={20} className="me-2" />
                    Commencer maintenant
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="lg" 
                    className="d-inline-flex align-items-center"
                  >
                    <Play size={20} className="me-2" />
                    Voir la démo
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={`hero-image fade-in ${isVisible ? 'visible' : ''}`}>
                <img 
                  src="https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Personne utilisant une application mobile" 
                  className="img-fluid rounded-4"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;