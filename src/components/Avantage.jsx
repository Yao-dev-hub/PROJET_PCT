
import "../styles/avantage.style.css"
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaClock, 
  FaRegFileAlt, 
  FaGlobe, 
  FaChartBar 
} from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaClock size={28} />,
      title: "Gain de temps",
      description: "Automatisez les démarches et réduisez les délais de traitement.",
      color: "#4e73df"
    },
    {
      icon: <FaRegFileAlt size={28} />,
      title: "Zéro papier",
      description: "Passez au tout numérique pour un meilleur archivage et une réduction des coûts.",
      color: "#1cc88a"
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Accessible partout",
      description: "Utilisable sur ordinateur, tablette ou mobile, à tout moment.",
      color: "#36b9cc"
    },
    {
      icon: <FaChartBar size={28} />,
      title: "Suivi des statuts",
      description: "Gardez une vue d'ensemble sur l'état d'avancement de chaque déclaration.",
      color: "#f6c23e"
    }
  ];

  return (
    <section className="benefits py-5 position-relative">
      {/* Fond sombre avec attachement */}
      <div className="dark-bg position-absolute w-100 h-100 top-0 start-0"></div>
      
      <Container className="position-relative z-index-1">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 text-white">Pourquoi adopter notre solution ?</h2>
          <div className="divider mx-auto"></div>
        </div>
        
        <Row className="g-4">
          {benefits.map((benefit, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="h-100 border-0 bg-transparent">
                <Card.Body className="p-4 text-center position-relative benefit-card bg-dark-soft rounded-3">
                  <div 
                    className="icon-wrapper mb-4 mx-auto rounded-circle"
                    style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-light mb-0">{benefit.description}</p>
                  <div 
                    className="hover-indicator"
                    style={{ backgroundColor: benefit.color }}
                  ></div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BenefitsSection;
