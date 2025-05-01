import React from 'react'
import "../styles/nav.style.css"
import "../styles/all.style.css"
import NaissanceForm from '../components/NaissanceForm'
function Naissance() {
    return (
        <div className=' container-fluid  p-lg-5'>
            <div className="row justify-content-center align-items-center ">
                <h4 className='text-center'>Bienvenue sur le formulaire pour la déclartion de naissance</h4>
                <div className="col-lg-12">
                    <NaissanceForm />
                </div>
            </div>
        </div>
    )
}

export default Naissance







