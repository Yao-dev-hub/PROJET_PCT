import React from 'react';
import { Input } from 'antd';

function Contact() {
  return (
    <div className="container my-5 py-5">
      <div className="row gy-5 align-items-start">
        {/* Partie Informations */}
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4 text-success text-center">Contactez-nous</h2>
          <p className="text-muted text-center px-2">
            Une question concernant une déclaration, une récupération d’acte ou une démarche en cours ? 
            Notre équipe est à votre écoute. Remplissez le formulaire ou utilisez nos coordonnées ci-dessous.
          </p>

          <div className="mt-5 row gy-4">
            <div className="col-md-4">
              <h6 className="fw-semibold">📍 Adresse</h6>
              <p className="mb-1 text-muted small">Pays : Côte d'Ivoire</p>
              <p className="mb-1 text-muted small">Ville : Abidjan</p>
              <p className="mb-1 text-muted small">Commune : Plateau</p>
            </div>

            <div className="col-md-4">
              <h6 className="fw-semibold">📞 Téléphone</h6>
              <p className="mb-1 text-muted small">+225 07 05 55 00 01</p>
            </div>

            <div className="col-md-4">
              <h6 className="fw-semibold">📧 Email</h6>
              <p className="mb-1 text-muted small">ivoire@gmail.ci</p>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold mb-4 text-center">Formulaire de contact</h5>
            <form className="row g-3">
              <div className="col-12">
                <Input size="large" type="text" placeholder="Votre nom" />
              </div>
              <div className="col-12">
                <Input size="large" type="email" placeholder="Votre email" />
              </div>
              <div className="col-12">
                <Input size="large" type="text" placeholder="Sujet" />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control shadow-none"
                  rows="6"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success w-100 py-2">
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;