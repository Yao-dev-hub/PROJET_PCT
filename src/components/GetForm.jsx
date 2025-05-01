import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { Input } from 'antd'
import { GrLinkNext } from "react-icons/gr"
import { IoArrowBackSharp } from "react-icons/io5";
import { GrSend } from "react-icons/gr"

function GetForm({ userId }) {

    const [etape, setEtape] = useState(1)
    const [extrait, setExtrait] = useState([])
    //Infos sur l'enfant
    const [nomEnfant, setNomEnfant] = useState("")
    const [prenomEnfant, setPrenomEnfant] = useState("")
    const [lieuNaissance, setLieuNaissance] = useState("")
    const [dateNaissance, setDateNaissance] = useState("")
    //Infos sur le parent
    const [nomPere, setNomPere] = useState("")
    const [prenomPere, setPreNomPere] = useState("")

    //Infos sur la mère
    const [nomMere, setNomMere] = useState("")
    const [prenomMere, setPreNomMere] = useState("")

    const [message, setMessage] = useState("");

    //Fonction pour vider le formulaire
    const VideForm = () => {
        setNomEnfant("")
        setPrenomEnfant("")
        setLieuNaissance("")
        setDateNaissance("")
        setNomMere("")
        setPreNomMere("")
        setNomPere("")
        setPreNomPere("")
        setEtape(1)
    }

    //Foonction pour passer au suivant
    const suivant = () => {
        setEtape(etape + 1)
    }

    //Foonction pour passer au suivant
    const retour = () => {
        setEtape(etape - 1)
    }

    //Soumettre
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const req = await fetch("http://localhost:2025/api/demande", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({ nomEnfant, prenomEnfant, lieuNaissance, dateNaissance, nomPere, prenomPere, nomMere, prenomMere })
            })
            const res = await req.json()

            if (res.message === "ok") {
                if (userId) {
                    userId(res.data._id)
                }
                VideForm()
                console.log(res.data)
                setTimeout(() => {
                    alert("Demande envoyée avec succès !")
                }, 1000)
            } else {
                VideForm()
                console.log(res.message)
                setTimeout(() => {
                    alert(res.message)
                }, 1000)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-12">
                    <Card className='shadow bg-light'>
                        <form className="row p-3" onSubmit={(e) => submitForm(e)}>
                            {etape === 1 && (
                                <>
                                    <h4 className='text-center fw-bolder my-4'>Information personnelle</h4>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='text' name='nomEnfant' id='nomEnfant' value={nomEnfant} onChange={(e) => setNomEnfant(e.target.value)} placeholder="Entrez votre nom" />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='text' name='prenomEnfant' id='prenomEnfant' value={prenomEnfant} onChange={(e) => setPrenomEnfant(e.target.value)} placeholder="Entrez votre prenom" />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='text' name='lieuNaissance' id='lieuNaissance' value={lieuNaissance} onChange={(e) => setLieuNaissance(e.target.value)} placeholder="Entrez le lieu de naissance" />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='date' name='date' id='date' value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
                                    </div>
                                    <div className="d-flex justify-content-end mb-3">
                                        <button className='btn btn-primary btn-sm' onClick={suivant} >Suivant <GrLinkNext /></button>
                                    </div>
                                </>
                            )}

                            {etape === 2 && (
                                <>
                                    <h4 className='text-center fw-bolder my-4'>Information sur le père</h4>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='text' name='nomPere' id='nomPere' value={nomPere} onChange={(e) => setNomPere(e.target.value)} placeholder="Entrez du père" />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='text' name='prenomPere' id='prenomPere' value={prenomPere} onChange={(e) => setPreNomPere(e.target.value)} placeholder="Entrez du père" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <button className='btn btn-dark btn-sm' onClick={retour} > <IoArrowBackSharp /> Retour</button>
                                        <button className='btn btn-primary btn-sm' onClick={suivant} >Suivant <GrLinkNext /></button>
                                    </div>
                                </>
                            )}

                            {etape === 3 && (
                                <>
                                    <h4 className='text-center fw-bolder my-4'>Information sur la mère</h4>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='text' name='nomMere' id='nomMere' value={nomMere} onChange={(e) => setNomMere(e.target.value)} placeholder="Entrez le nom de la mère" />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <Input type='text' name='prenomMere' id='prenomMere' value={prenomMere} onChange={(e) => setPreNomMere(e.target.value)} placeholder="Entrez le prenom de la mère" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <button className='btn btn-dark btn-sm' onClick={retour} > <IoArrowBackSharp /> Retour</button>
                                        <button type='submit' className='btn btn-warning btn-sm fw-bolder text-white' >Soumettre <GrSend className=' fs-5' /></button>
                                    </div>
                                </>
                            )}
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default GetForm