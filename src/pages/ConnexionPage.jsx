import React from 'react'
import InscriptionForm from '../components/InscriptionForm'
import Connexion from '../components/connexion'

function ConnexionPage() {
    return (
        <div className='container p-5'>
            <div className="row">
                <div className="col-lg-5">
                    <Connexion />
                </div>
                <div className="col-lg-7 img3"></div>
            </div>
        </div>
    )
}

export default ConnexionPage