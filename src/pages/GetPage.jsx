import React, { useEffect, useState } from 'react'
import GetForm from '../components/GetForm'
import { GetExtrait } from '../controllers/Get.controller.mjs'
import { Card } from 'antd'

function GetPage() {

    const [extrait, setExtrait] = useState(null)
    const RecupId = async (extraitId) => {
        const res = await GetExtrait(extraitId)
        if (res) {
            console.log(res)
            setExtrait(res)
        }
    }
    
    // useEffect(() => {
    //     const _id = localStorage.getItem("extraitId")
    //     console.log(_id)
    //     if (!_id) {
    //         console.log("Id introuvable", _id)
    //     }
    //     setTimeout(async () => {
    //         const res = await GetExtrait(_id)
    //         if (res) {
    //             console.log("Trouvé", res)
    //             setExtrait(res)
    //         }
    //     }, 100)
    // }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4">
                    <GetForm userId={RecupId} />
                </div>
                <div className="col-lg-6">
                    {extrait && extrait !== null && extrait !== undefined && (
                        <Card className="shadow mt-4 p-3">
                            <h5 className="fw-bold text-center mb-3">Informations de l'extrait</h5>
                            <p><strong>Nom :</strong> {extrait.nomEnfant}</p>
                            <p><strong>Prénom :</strong> {extrait.prenomEnfant}</p>
                            <p><strong>Date de naissance :</strong> {extrait.dateNaissance}</p>
                            <p><strong>Lieu de naissance :</strong> {extrait.lieuNaissance}</p>
                            <p><strong>Nom du père :</strong> {extrait.nomPere}</p>
                            <p><strong>Prénom du père :</strong> {extrait.prenomPere}</p>
                            <p><strong>Nom de la mère :</strong> {extrait.nomMere}</p>
                            <p><strong>Prénom de la mère :</strong> {extrait.prenomMere}</p>
                            {extrait.certificatNaissanceHopital && (
                                <img src={`http://localhost:2025${extrait.pieceIdentitePere}`} width={100} alt="Pièce identité su père" />
                            )}
                        </Card>
                    )}
                </div>
            </div>
        </div >
    )
}

export default GetPage