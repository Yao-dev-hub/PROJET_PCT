import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { FaArrowLeftLong } from "react-icons/fa6"
import { FaArrowRightLong } from "react-icons/fa6"
import { GrSend } from "react-icons/gr";
import toast, { Toaster } from 'react-hot-toast';



function NaissanceForm() {
    const [etape, setEtape] = useState(1)

    //Passer au suivant
    const suivant = () => {
        setEtape(etape + 1)
    }
    //Retourner en arrière
    const retour = () => {
        setEtape(etape - 1)
    }

    const ShowMessage = () => {
        toast.success('Données envoyées avec succès !')
    }



    return (
        <div className='container d-flex justify-content-center align-items-center my-5'>
            <div className="row justify-content-between align-items-center">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="col-lg-4 extrait-image">
                    <img src="/extrait.jpg" width={400} alt="image extrait de naissance" />
                </div>
                <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center">
                    {
                        etape === 1 ? (
                            <h5 className='fw-bold mb-4'>Veillez remplir correctement tous les champs de l'étape <span className='btn btn-warning rounded-circle px-3 fw-bolder text-white py-1'>{etape}</span></h5>
                        ) : etape === 2 ? (
                            <h5>Veillez remplir correctement tous les champs de l'étape  <span className='btn btn-warning rounded-circle px-3 fw-bolder text-white py-1'>{etape}</span></h5>
                        ) : etape === 3 ? (
                            <h5>Veillez remplir correctement tous les champs de l'étape  <span className='btn btn-warning rounded-circle px-3 fw-bolder text-white py-1'>{etape}</span></h5>
                        ) : etape === 4 && (
                            <h5>Veillez remplir correctement tous les champs de l'étape  <span className='btn btn-warning rounded-circle px-3 fw-bolder text-white py-1'>{etape}</span></h5>
                        )
                    }
                    <form className='row bg-light p-5 rounded-5'>
                        {
                            etape === 1 && (
                                <>
                                    <div className="my-4 col-lg-6">
                                        <Input type='text'  className='text-dark'  placeholder="Nom" />
                                    </div>
                                    <div className="my-4 col-lg-6">
                                        <Input type='text'  className='text-dark'  placeholder="Prenom" />
                                    </div>
                                    <div className="mb-4 col-lg-12">
                                        <Input type='datetime-local'  className='text-dark'  name='date' />
                                    </div>
                                    <div className="mb-4 col-lg-12">
                                        <Input type='text'  className='text-dark'  placeholder="Lieu de naissance" />
                                    </div>
                                    <div className="mb-3 col-lg-12 d-flex justify-content-end">
                                        <Button type="primary" className='btn-sm' onClick={suivant}>Suivant <FaArrowRightLong /></Button>
                                    </div>
                                </>
                            )
                        }

                        {
                            etape === 2 && (
                                <>
                                    <div className="my-4 col-lg-6">
                                        <Input type='text'   className='text-dark' placeholder="Nom du père" />
                                    </div>
                                    <div className="my-4 col-lg-6">
                                        <Input type='text'  className='text-dark'  placeholder="Prenom du père" />
                                    </div>
                                    <div className="mb-4 col-lg-12">
                                        <Input type='text'   className='text-dark' placeholder="Nationalité du père" />
                                    </div>
                                    <div className="mb-4 col-lg-12">
                                        <Input type='tel'  className='text-dark'  placeholder="Numero du père" />
                                    </div>
                                    <div className="mb-3 col-lg-12 d-flex justify-content-between">
                                        <Button color="default" variant="solid" onClick={retour}><FaArrowLeftLong /> retour </Button>
                                        <Button color="primary" variant="solid" onClick={suivant}>suivant <FaArrowRightLong /></Button>
                                    </div>
                                </>
                            )
                        }

                        {
                            etape === 3 && (
                                <>
                                    <div className="my-4 col-lg-6">
                                        <Input type='text'  className='text-dark'  placeholder="Nom de la mère" />
                                    </div>
                                    <div className="my-4 col-lg-6">
                                        <Input type='text'  className='text-dark'  placeholder="Prenom de la mère" />
                                    </div>
                                    <div className="mb-4 col-lg-12">
                                        <Input type='text'  className='text-dark'  placeholder="Nationalité de la mère" />
                                    </div>
                                    <div className="mb-4 col-lg-12">
                                        <Input type='tel'  className='text-dark'  placeholder="Numero de la mère" />
                                    </div>

                                    <div className="mb-3 col-lg-12 d-flex justify-content-between">
                                        <Button color="default" variant="solid" onClick={retour}><FaArrowLeftLong /> retour </Button>
                                        <Button color="primary" variant="solid" onClick={suivant}>suivant <FaArrowRightLong /></Button>
                                    </div>
                                </>
                            )
                        }

                        {
                            etape === 4 && (
                                <>
                                    <div className="my-4 col-lg-12">
                                        <label htmlFor="pieceIdentite" className='mb-2'>Piece d'identité du déclarant </label>
                                        <Input type='file' className='form-control text-dark' id='pieceIdentite' name='pieceIdentite' accept='image/jpg,image/png,application/pdf' />
                                    </div>
                                    <div className="mb-3 col-lg-12">
                                        <label htmlFor="certificatNaissance" className='mb-2'>Certificat de naissance </label>
                                        <Input type='file' className='form-control text-dark' id='certificatNaissance' name='certificatNaissance' accept='image/jpg,image/png,application/pdf' />
                                    </div>
                                    <div className="mb-3 col-lg-12 d-flex justify-content-between">
                                        <Button color="default" variant="solid" onClick={retour}><FaArrowLeftLong /> retour </Button>
                                        <Button color="cyan" variant="solid" onClick={ShowMessage}>Soumettre <GrSend /></Button>
                                    </div>
                                </>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NaissanceForm