import React from 'react'
import { Input } from 'antd';
import { FcGoogle } from "react-icons/fc";
import { Divider } from 'antd';
import { Link } from 'react-router-dom';

function InscriptionForm() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 my-5">
                    <h3 className='text-center fw-bold'>S'inscrire ici</h3>
                    <form className="row p-lg-4">
                        <div className="col-lg-6 mb-3">
                            <Input placeholder="Entrez votre nom" />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <Input placeholder="Entrez votre prenom" />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <Input placeholder="Entrez votre téléphone" />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <Input placeholder="Entrez votre  adresse email" />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <Input placeholder="Entrez votre mot de passe " />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <button className='btn btn-success form-control fw-bolder'>Créer un compte </button>
                        </div>
                        <div className="col-lg-12 fw-bolder d-flex justify-content-between mb-3">
                            <span>Déjà un inscrit (e) ?</span>
                            <Link className='btn btn-warning border text-white' to="/connexion">Se connecter</Link>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-between mb-3">
                            <div className="col-lg-5">
                                <Divider />
                            </div>
                            ou
                            <div className="col-lg-5">
                                <Divider />
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <button className='btn btn-light border fw-bolder form-control p-lg-2'><FcGoogle className='me-2 fs-4' /> Se connecter avec google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InscriptionForm