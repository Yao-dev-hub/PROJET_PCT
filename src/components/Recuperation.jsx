import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

function Recuperation() {
    return (
        <div className='container mb-5 p-lg-5 '>
            <div className="row p-lg-5">
                <h2 className='fw-bold text-center mb-3'>🔎 Récupération d'une déclaration</h2>
                <p className='text-center my-3 p-2'>
                    Merci de sélectionner le type d’acte que vous souhaitez récupérer. Vous pouvez rechercher une déclaration de naissance, de mariage ou de décès.
                    Chaque option vous permettra d’accéder rapidement aux informations déjà enregistrées, grâce à une interface claire et guidée.
                </p>
            </div>
            <div className="row justify-content-evenly mt-5 bg-light p-lg-5 rounded-5">
                <div className="col-lg-4 pt-3  d-flex justify-content-center align-items-center">
                    <Card className='d-flex flex-column justify-content-center align-items-center shadow bg-light'>
                        <img src="/doc-1.png" width={100} className='declaration mx-5' alt="declaration image" />
                        <div className="card-body">
                            <h6 className='text-center'>Déclaration naissance ...</h6>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className=' btn  btn-warning  text-center me-1 text-light fw-bolder'>Cliquez ici <CiEdit className='fw-bold fs-5' /></Link>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-4 pt-3  d-flex justify-content-center align-items-center">
                    <Card className='d-flex flex-column justify-content-center align-items-center shadow bg-light'>
                        <img src="/doc-4.png" width={100} className='declaration mx-5' alt="declaration image" />
                        <div className="card-body">
                            <h6 className='text-center'>Déclaration mariage ...</h6>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className=' btn  btn-light border-dark  text-center me-1 text-warning fw-bolder'>Cliquez ici <CiEdit className='fw-bold fs-5' /></Link>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-4 pt-3  d-flex justify-content-center align-items-center">
                    <Card className='d-flex flex-column justify-content-center align-items-center shadow bg-light'>
                        <img src="/doc-6.png" width={100} className='declaration mx-5' alt="declaration image" />
                        <div className="card-body">
                            <h6 className='text-center'>Déclaration décès ...</h6>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className=' btn  btn-success  text-center me-1 text-light fw-bolder'>Cliquez ici <CiEdit className='fw-bold fs-5' /></Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Recuperation