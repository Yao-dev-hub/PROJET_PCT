import { Input } from 'antd'
import React, { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

function FormMariage() {
    const [etape, setEtape] = useState(1)

    //Passer au suivant
    const suivant = () => {
        setEtape(etape + 1)
    }

    //Passer au suivant
    const retour = () => {
        setEtape(etape - 1)
    }


    return (
        <div className='container-fluid my-5'>
            <div className="row justify-content-between align-items-center p-lg-5">
                <div className="col-lg-3 extrait-image">
                    <img src="/marriage.jpg" width={400} alt="image extrait de naissance" />
                </div>
                <div className="col-lg-8 p-lg-5">
                    <form className='row bg-light p-lg-4 rounded-5'>
                        <>
                            {
                                etape === 1 && (
                                    <>
                                        <h6 className='text-center my-4'>Informations générales sur le mariage </h6>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='lieu' placeholder='Lieu du mariage' />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='date' name='date' />
                                        </div>
                                        <div className="mb-3 d-flex justify-content-end">
                                            <button onClick={suivant} className='btn btn-primary btn-sm'>suivant <FaArrowRightLong /></button>
                                        </div>
                                    </>
                                )
                            }


                            {
                                etape === 2 && (
                                    <>
                                        <h6 className='text-center my-4'> Informations sur l'épouse  </h6>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='nomEpouse' placeholder='Nom de la mariée' />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='prenomEpouse' placeholder='Prenom de la mariée ' />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='lieuNaissanceEpouse' placeholder='Lieu de naissance de la mariée ' />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='tel' name='telEpouse' placeholder="Numero de téléphone de l'épouse " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='nationaliteEpouse' placeholder='Nationalité de la mariée' />
                                        </div>

                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='professionEpouse' placeholder='Profession de la mariée ' />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='adresseEpouse' placeholder='Adresse de la mariée ' />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='PieceIdentiteEpouse' placeholder="Numéro de la pièce d'identité de la mariée " />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='pereEpouse' placeholder='Nom complet du père de la mariée' />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='mereEpouse' placeholder='Nom complet de la mère de la mariée' />
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                            <button onClick={retour} className='btn btn-dark btn-sm'><FaArrowLeftLong /> retour </button>
                                            <button onClick={suivant} className='btn btn-primary btn-sm'>suivant <FaArrowRightLong /></button>
                                        </div>
                                    </>
                                )
                            }

                            {
                                etape === 3 && (
                                    <>
                                        <h6 className='text-center my-4'> 👰Informations sur l'époux  </h6>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='nomEpoux' placeholder="Nom de l'époux" />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='prenomEpoux' placeholder="Prenom de l'époux " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='lieuNaissanceEpoux' placeholder="Lieu de naissance de l'époux " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='tel' name='telEpoux' placeholder="Numero de téléphone de l'époux " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='nationaliteEpoux' placeholder="Nationalité de l'époux" />
                                        </div>

                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='professionEpoux' placeholder="Profession de l'époux " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='adresseEpoux' placeholder="Adresse de l'époux " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='PieceIdentiteEpoux' placeholder="Numéro de la pièce d'identité de l'époux " />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='pereEpoux' placeholder="Nom complet du père de l'époux" />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <Input type='text' name='mereEpoux' placeholder="Nom complet de la mère de l'époux" />
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                            <button onClick={retour} className='btn btn-dark btn-sm'><FaArrowLeftLong /> retour </button>
                                            <button onClick={suivant} className='btn btn-primary btn-sm'>suivant <FaArrowRightLong /></button>
                                        </div>
                                    </>
                                )
                            }

                            {
                                etape === 4 && (
                                    <>
                                        <h6 className='text-center my-4'>👥 Informations sur le témoin 1 </h6>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='nomTemoin1' placeholder="Nom complet du témoin 1" />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='date' name='dateNaissanceTemoin1' />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='professionTemoin1' placeholder="Profession du témoin 1 " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='adresseTemoin1' placeholder="Adresse du témoin 1 " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='professionTemoin1' placeholder="Profession du témoin 1 " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='lienTemoin1' placeholder="Lien avec les mariés " />
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                            <button onClick={retour} className='btn btn-dark btn-sm'><FaArrowLeftLong /> retour </button>
                                            <button onClick={suivant} className='btn btn-primary btn-sm'>suivant <FaArrowRightLong /></button>
                                        </div>
                                    </>
                                )
                            }

                            {
                                etape === 5 && (
                                    <>
                                        <h6 className='text-center my-4'> 👥 Informations sur le témoin 2 </h6>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='nomTemoin2' placeholder="Nom complet du témoin 2" />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='date' name='dateNaissanceTemoin2' />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='professionTemoin2' placeholder="Profession du témoin 2 " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='adresseTemoin2' placeholder="Adresse du témoin 2 " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='professionTemoin2' placeholder="Profession du témoin 2 " />
                                        </div>
                                        <div className="mb-3 col-lg-4">
                                            <Input type='text' name='lienTemoin2' placeholder="Lien avec les mariés " />
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                            <button onClick={retour} className='btn btn-dark btn-sm'><FaArrowLeftLong /> retour </button>
                                            <button onClick={suivant} className='btn btn-primary btn-sm'>suivant <FaArrowRightLong /></button>
                                        </div>

                                    </>
                                )
                            }

                            {
                                etape === 6 && (
                                    <>
                                        <h4 className="my-4">Informations Juridiques du Mariage</h4>
                                        <div className="mb-3 col-lg-6">
                                            <label for="regime" className="form-label">Régime matrimonial choisi</label>
                                            <select className="form-select shadow-none" id="regime" name="regime">
                                                <option value="">-- Sélectionner --</option>
                                                <option value="communauté">Communauté de biens</option>
                                                <option value="séparation">Séparation de biens</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>
                                        <div class="mb-3 col-lg-6">
                                            <label for="certificate" className="form-label">Certificat prénuptial ou mention de dispense</label>
                                            <Input type="text" className="form-control shadow-none" id="certificate" name="certificate" placeholder="Certificat médical ou 'Dispense'" />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label for="contract" className="form-label">Contrat de mariage</label>
                                            <select className="form-select  shadow-none" id="contract" name="contract" >
                                                <option value="">-- Sélectionner --</option>
                                                <option value="présent">Présent</option>
                                                <option value="absent">Absent</option>
                                            </select>
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label for="officer" className="form-label">Nom de l’officier d’état civil</label>
                                            <Input type="text" id="officer" name="officer" placeholder="Nom de l’officier" />
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                            <button onClick={retour} className='btn btn-dark btn-sm'><FaArrowLeftLong /> retour </button>
                                            <button onClick={suivant} className='btn btn-success btn-sm'>Soumettre <FaArrowRightLong /></button>
                                        </div>

                                    </>
                                )
                            }



                        </>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormMariage