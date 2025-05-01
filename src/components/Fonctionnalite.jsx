import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FileText, Search, Activity, Layout, Shield } from 'lucide-react';
import '../styles/fonction.style.css';

const Fonctionnalite = () => {
    return (
        <section className="features-section" id='bg-image'>
            <Container>
                <Row className="text-center mb-5">
                    <Col lg={8} className="mx-auto">
                        <h2 className="display-5 fw-bold mb-3">Fonctionnalités clés</h2>
                        <p className="lead text-dark">
                            Tout ce dont vous avez besoin pour gérer efficacement les actes d'état civil.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col md={6} lg={4}>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <FileText size={32} />
                            </div>
                            <h3 className="h4 mb-3">Déclaration d'actes</h3>
                            <p className="text-secondary mb-0">
                                Enregistrez facilement les actes de naissance, mariage et décès avec une interface guidée.
                            </p>
                            <div className="feature-card-decoration"></div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <Search size={32} />
                            </div>
                            <h3 className="h4 mb-3">Consultation rapide</h3>
                            <p className="text-secondary mb-0">
                                Retrouvez instantanément les actes avec des filtres et une recherche avancée.
                            </p>
                            <div className="feature-card-decoration"></div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <Activity size={32} />
                            </div>
                            <h3 className="h4 mb-3">Suivi des statuts</h3>
                            <p className="text-secondary mb-0">
                                Visualisez en temps réel l'état de chaque déclaration et leur progression.
                            </p>
                            <div className="feature-card-decoration"></div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <Layout size={32} />
                            </div>
                            <h3 className="h4 mb-3">Interface intuitive</h3>
                            <p className="text-secondary mb-0">
                                Une expérience utilisateur fluide et moderne, accessible à tous les utilisateurs.
                            </p>
                            <div className="feature-card-decoration"></div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <Shield size={32} />
                            </div>
                            <h3 className="h4 mb-3">Sécurité des données</h3>
                            <p className="text-secondary mb-0">
                                Protection avancée des informations avec un contrôle d'accès strict.
                            </p>
                            <div className="feature-card-decoration"></div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="d-flex align-items-stretch">
                        <div className="feature-card feature-card-highlight">
                            <div className="highlight-content">
                                <h3 className="h4 mb-3">Prêt à commencer ?</h3>
                                <p className="text-secondary mb-4">
                                    Découvrez comment Civilia peut transformer votre gestion administrative.
                                </p>
                                <button className="btn btn-success btn-lg">Demander une démo</button>
                            </div>
                            <div className="feature-card-decoration"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Fonctionnalite