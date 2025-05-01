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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="about-section ">
      <Container>
        <Row className="justify-content-center p-3">
          <Col lg={12}>
            <div className="about-content">
              <h2 className="display-6 fw-bold mb-4 text-center h2-mobile">Bienvenue sur <br /> le Site Gouvernementale de Gestion des Actes  <br /> Un Accès Simple et Fiable à Vos Documents Administratifs</h2>
              <p className="lead text-secondary text-center mb-5 p-mobile">
                Notre site vous accompagne dans toutes vos démarches administratives liées aux actes de naissance,
                de mariage et de décès. En quelques étapes simples, vous pouvez déposer vos déclarations, demander vos extraits officiels et suivre le traitement de vos demandes. Fiable, sécurisé et accessible 24h/24,
                notre portail est là pour simplifier votre relation avec l'administration
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <Clock className="text-white fw-bolder" size={24} />
                  </div>
                  <div className="feature-text">
                    <h3 className="h6 mb-2">Gain de temps</h3>
                    <p className="text-secondary mb-0">Optimisation des processus pour les citoyens et agents</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <CheckCircle className="text-white fw-bolder" size={24} />
                  </div>
                  <div className="feature-text">
                    <h3 className="h6 mb-2">Démarches simplifiées</h3>
                    <p className="text-secondary mb-0">Procédures administratives 100% en ligne</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Activity className="text-white fw-bolder" size={24} />
                  </div>
                  <div className="feature-text">
                    <h3 className="h6 mb-2">Suivi en temps réel</h3>
                    <p className="text-secondary mb-0">Visualisation instantanée de l'état des déclarations</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Shield className="text-white fw-bolder" size={24} />
                  </div>
                  <div className="feature-text">
                    <h3 className="h6 mb-2">Sécurité maximale</h3>
                    <p className="text-secondary mb-0">Protection et confidentialité garanties</p>
                  </div>
                </div>
              </div>
              <div className="container d-flex align-items-center justify-content-center mt-5 p-2">
                {/* Bouton 1 */}
                <button className="btn btn-danger fs-5 fw-bold  border me-2 p-3" onClick={handleShow}>
                  Commencer ici ... <FaUserEdit className='fs-5' />
                </button>

                <Modal show={show} onHide={handleClose} centered className='modal-xl '>
                  <Modal.Body className='row pt-3 justify-content-center align-items-center '>
                    <div className="col-lg-4 pt-3 d-flex justify-content-center align-items-center">
                      <Card className='d-flex flex-column justify-content-center align-items-center shadow bg-light'>
                        <img src="/doc-1.png" width={100} className='declaration text-center mx-5' alt="declaration image" />
                        <div className="card-body">
                          <h6 className='text-center'>Acte de naissance ...</h6>
                          <div className="d-flex justify-content-between mt-3">
                            <Link className=' btn btn-warning text-center me-1 text-light fw-bolder' to="/declare" >Déclarer <CiEdit className='fw-bold fs-5' /></Link>
                            <Link className=' btn btn-outline-warning bg-light text-warning text-center' to="/recup" >Recherche <LuSearch /></Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="col-lg-4 pt-3  d-flex justify-content-center align-items-center">
                      <Card className='d-flex flex-column justify-content-center align-items-center shadow bg-light'>
                        <img src="/doc-6.png" width={100} className='declaration mx-5' alt="declaration image" />
                        <div className="card-body">
                          <h6 className='text-center'>Acte de décès ...</h6>
                          <div className="d-flex justify-content-between mt-3">
                            <Link className=' btn  btn-success  text-center me-1 text-light fw-bolder' to="/declare">Déclarer <CiEdit className='fw-bold fs-5' /></Link>
                            <Link className=' btn btn-outline-success bg-light text-success text-center' to="/recup">Recherche <LuSearch /></Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="col-lg-4 pt-3  d-flex justify-content-center align-items-center">
                      <Card className='d-flex flex-column justify-content-center align-items-center shadow bg-light'>
                        <img src="/doc-4.png" width={100} className='declaration mx-5' alt="declaration image" />
                        <div className="card-body">
                          <h6 className='text-center'>Déclaration mariage ...</h6>
                          <div className="d-flex justify-content-between mt-3">
                            <Link className=' btn  btn-primary  text-center me-1 text-light fw-bolder' to="/declare">Déclarer <CiEdit className='fw-bold fs-5' /></Link>
                            <Link className=' btn btn-outline-primary text-primary bg-white text-center' tp="/recup" >Recherche <LuSearch /></Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </Modal.Body>
                  <div className="d-flex justify-content-end constainer my-3">
                    <button className='btn btn-close border  shadow-none p-3 rounded-circle me-3 ' onClick={handleClose}></button>
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