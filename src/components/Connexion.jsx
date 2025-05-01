import React from 'react'
import { Input } from 'antd';
import { FcGoogle } from "react-icons/fc";
import { Divider } from 'antd';
import { Link } from 'react-router-dom';

function Connexion() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 my-5">
                    <h3 className='text-center fw-bold'>Se connecter ici</h3>
                    <form className="row p-lg-4">
                        <div className="col-lg-12 mb-3">
                            <Input placeholder="Entrez votre  adresse email" />
                        </div>
                        <div className="col-lg-12 mb-3">
                            <Input placeholder="Entrez votre mot de passe " />
                        </div>
                        <div className="col-lg-12 mb-4">
                            <button className='btn btn-danger form-control fw-bolder'>Se connecter </button>
                        </div>
                        <div className="col-lg-12 fw-bolder d-flex justify-content-between mb-3">
                            <span>Pas encore inscrit (e) ?</span>
                            <Link className='btn btn-dark border text-white' to="/inscription">S'inscrire</Link>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-between mb-2">
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

export default Connexion