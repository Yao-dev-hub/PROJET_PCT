import { Input } from 'antd'
import React from 'react'

function Contact() {
    return (
        <div className='container d-flex justify-content-center align-items-center my-5 p-lg-4'>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-7">
                    <div className="row flex-column justify-content-center align-items-center p-lg-5">
                        <div className="col-lg-12">
                            <h4 className='text-center fw-bold  mb-5'>Contactez-nous pour toute demande ou assistance.</h4>
                            <p className='small text-center'>
                                Vous avez une question concernant une déclaration, une récupération d’acte de naissance ou une démarche en cours ?
                                Notre équipe est à votre écoute pour vous accompagner et répondre rapidement à toutes vos demandes.
                                Remplissez le formulaire ci-dessous ou utilisez nos coordonnées pour nous joindre directement.
                            </p>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-4">
                                    <h5>Adresse</h5>
                                    <p  className='h6 text-muted '>Pays : Côte d'ivoire</p>
                                    <p  className='h6 text-muted '>ville : Abidjan</p>
                                    <p  className='h6 text-muted '>Commune : Plateau</p>
                                </div>
                                <div className="col-lg-4">
                                    <h5>Téléphone</h5>
                                    <p  className='h6 text-muted '>+225 07 05 55 00 01</p>
                                </div>
                                <div className="col-lg-4">
                                    <h5 >Email</h5>
                                    <p className='h6 text-muted '>ivoire@gmail.ci</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <form className='row'>
                        <h5 className='text-center'>Avez-vous une question ?</h5>
                        <div className="mb-3 col-lg-12">
                            <Input type="text" id="nom" name="nom" placeholder="Entrez votre nom"></Input>
                        </div>
                        <div className="mb-3 col-lg-12">
                            <Input type="email" id="email" name="email" placeholder="Entrez votre email"></Input>
                        </div>
                        <div className="mb-3 col-lg-12">
                            <Input type="text" id="sujet" name="sujet" placeholder="Entrez votre sujet"></Input>
                        </div>
                        <div className="mb-3 col-lg-12">
                            <textarea name="commentaire" className='form-control shadow-none' id="commentaire" cols="20" rows="10" placeholder='Entrez votre message ...'></textarea>
                        </div>
                        <div className="mb-3 col-lg-12">
                            <button type='submit' className='btn btn-success p-lg-2 btn-sm text-center form-control'>Enoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact