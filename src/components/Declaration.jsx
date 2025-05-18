import { Card } from 'antd'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Declaration() {
    return (
        <div className='container mb-5 p-lg-5 '>
            <div className="row p-lg-5">
                <h2 className='fw-bold text-center my-5'>📝 Choisissez le type de déclaration à effectuer</h2>
                <p className='text-center my-3 p-2'>
                    Veuillez sélectionner l’acte que vous souhaitez déclarer.
                    Vous avez la possibilité de faire une déclaration de naissance, de mariage ou de décès.
                    Chaque formulaire est conçu pour vous guider étape par étape afin de simplifier la procédure.
                </p>
            </div>
            <div className="row justify-content-evenly mt-5 bg-light p-lg-5 rounded-5">
                <div className="col-lg-4 pt-3  d-flex justify-content-center align-items-center">
                    <Card className='d-flex flex-column justify-content-center align-items-center shadow bg-light'>
                        <img src="/doc-1.png" width={100} className='declaration mx-5' alt="declaration image" />
                        <div className="card-body">
                            <h6 className='text-center'>Déclaration naissance ...</h6>
                            <div className="d-flex justify-content-center mt-3">
                                <Link className=' btn  btn-warning  text-center me-1 text-light fw-bolder' to="/create-naissance">Cliquez ici <CiEdit className='fw-bold fs-5' /></Link>
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
                                <Link className=' btn  btn-light  text-center border-dark me-1 text-warning fw-bolder' to="/create-mariage">Cliquez ici <CiEdit className='fw-bold fs-5' /></Link>
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
                                <Link className=' btn  btn-success  text-center me-1 text-light fw-bolder' to="/create-deces">Cliquez ici <CiEdit className='fw-bold fs-5' /></Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Declaration