import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaUserShield, 
  FaCity, 
  FaBuilding, 
  FaUserTie 
} from "react-icons/fa";
import "../styles/cible.style.css"

const CibleSection = () => {
  const targetGroups = [
    {
      icon: <FaUserShield size={40} />,
      title: "Agents d'état civil",
      description: "Gérez les actes officiels avec une interface dédiée et sécurisée pour un travail plus efficace."
    },
    {
      icon: <FaCity size={40} />,
      title: "Secrétaires de mairie",
      description: "Centralisez et simplifiez vos tâches administratives quotidiennes avec des outils adaptés."
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Sous-préfectures",
      description: "Accédez à une vision consolidée des données avec des fonctionnalités de suivi et de reporting."
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Administrations locales",
      description: "Collaborez facilement entre services avec une plateforme unifiée et sécurisée."
    }
  ];

  return (
    <section className="target-audience py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Une solution pensée pour les acteurs de l'administration locale</h2>
          <p className="lead text-muted">
            Notre plateforme simplifie le travail des professionnels de l'état civil à tous les niveaux.
          </p>
        </div>

        <Row xs={1} md={2} lg={4} className="g-4 my-5 p-1">
          {targetGroups.map((group, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm border-0 rounded-3 hover-effect">
                <Card.Body className="text-center p-4">
                  <div className="icon-wrapper mb-3 text-primary">
                    {group.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-3">{group.title}</h3>
                  <p className="text-muted mb-0">{group.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CibleSection 