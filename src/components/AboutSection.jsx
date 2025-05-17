import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Clock, CheckCircle, Activity, Shield } from 'lucide-react';
import '../styles/about.style.css';
import { Link } from 'react-router-dom';
import Card from 'antd/es/card/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CiEdit } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { FaUserEdit } from "react-icons/fa";

const AboutSection = () => {
  const [show, setShow] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cardData = [
    {
      id: 1,
      title: "Acte de naissance ...",
      image: "/doc-1.png",
      declareColor: "warning",
      searchColor: "outline-warning",
      declareLink: "/declare",
      searchLink: "/recup"
    },
    {
      id: 2,
      title: "Acte de décès ...",
      image: "/doc-6.png",
      declareColor: "success",
      searchColor: "outline-success",
      declareLink: "/declare",
      searchLink: "/recup"
    },
    {
      id: 3,
      title: "Déclaration mariage ...",
      image: "/doc-4.png",
      declareColor: "primary",
      searchColor: "outline-primary",
      declareLink: "/declare",
      searchLink: "/recup"
    }
  ];

  return (
    <section className="about-section">
      <Container>
        <Row className="justify-content-center p-3">
          <Col lg={12}>
            <div className="about-content">
              <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-4 text-center h2-mobile animate__animated animate__fadeIn">
                  Bienvenue sur <br /> 
                  <span className="gradient-text">le Site Gouvernemental de Gestion des Actes</span> <br /> 
                  Un Accès Simple et Fiable à Vos Documents Administratifs
                </h2>
                <p className="lead text-secondary text-center mb-5 p-mobile animate__animated animate__fadeIn animate__delay-1s">
                  Notre site vous accompagne dans toutes vos démarches administratives liées aux actes de naissance,
                  de mariage et de décès. En quelques étapes simples, vous pouvez déposer vos déclarations, demander vos extraits officiels et suivre le traitement de vos demandes. Fiable, sécurisé et accessible 24h/24,
                  notre portail est là pour simplifier votre relation avec l'administration
                </p>
              </div>

              <div className="features-grid">
                {[
                  {
                    icon: <Clock className="text-white fw-bolder" size={24} />,
                    title: "Gain de temps",
                    description: "Optimisation des processus pour les citoyens et agents"
                  },
                  {
                    icon: <CheckCircle className="text-white fw-bolder" size={24} />,
                    title: "Démarches simplifiées",
                    description: "Procédures administratives 100% en ligne"
                  },
                  {
                    icon: <Activity className="text-white fw-bolder" size={24} />,
                    title: "Suivi en temps réel",
                    description: "Visualisation instantanée de l'état des déclarations"
                  },
                  {
                    icon: <Shield className="text-white fw-bolder" size={24} />,
                    title: "Sécurité maximale",
                    description: "Protection et confidentialité garanties"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-item animate__animated animate__fadeInUp"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <div className="feature-icon pulse-animation">
                      {feature.icon}
                    </div>
                    <div className="feature-text">
                      <h3 className="h6 mb-2">{feature.title}</h3>
                      <p className="text-secondary mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="container d-flex align-items-center justify-content-center mt-5 p-2">
                <button 
                  className="btn btn-danger fs-5 fw-bold border me-2 p-3 hover-grow"
                  onClick={handleShow}
                >
                  Commencer ici ... <FaUserEdit className='fs-5 ms-2' />
                </button>

                <Modal show={show} onHide={handleClose} centered className='modal-xl'>
                  <Modal.Body className='row pt-3 justify-content-center align-items-center'>
                    {cardData.map((card) => (
                      <div 
                        key={card.id}
                        className="col-lg-4 pt-3 d-flex justify-content-center align-items-center"
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <Card 
                          className={`d-flex flex-column justify-content-center align-items-center shadow bg-light card-hover ${
                            hoveredCard === card.id ? 'hover-scale' : ''
                          }`}
                        >
                          <img 
                            src={card.image} 
                            width={100} 
                            className='declaration text-center mx-5' 
                            alt="declaration" 
                          />
                          <div className="card-body">
                            <h6 className='text-center'>{card.title}</h6>
                            <div className="d-flex justify-content-between mt-3">
                              <Link 
                                className={`btn btn-${card.declareColor} text-center me-1 text-light fw-bolder hover-grow-sm`} 
                                to={card.declareLink}
                              >
                                Déclarer <CiEdit className='fw-bold fs-5 ms-1' />
                              </Link>
                              <Link 
                                className={`btn btn-${card.searchColor} bg-light text-center hover-grow-sm`} 
                                to={card.searchLink}
                              >
                                Recherche <LuSearch className='ms-1' />
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </Modal.Body>
                  <div className="d-flex justify-content-end container my-3">
                    <button 
                      className='btn btn-close border shadow-none p-3 rounded-circle me-3 hover-grow-sm' 
                      onClick={handleClose}
                    ></button>
                  </div>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;