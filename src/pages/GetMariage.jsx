import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { GrSend } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';

function RecupeMariage() {
    const [nomEpoux, setNomEpoux] = useState('');
    const [prenomEpoux, setPrenomEpoux] = useState('');
    const [nomEpouse, setNomEpouse] = useState('');
    const [prenomEpouse, setPrenomEpouse] = useState('');
    const [dateMariage, setDateMariage] = useState('');
    const [lieuMariage, setLieuMariage] = useState('');
    const [motif, setMotif] = useState('');
    const [pieceIdentite, setPieceIdentite] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            nomEpoux,
            prenomEpoux,
            nomEpouse,
            prenomEpouse,
            dateMariage,
            lieuMariage,
            motif,
            pieceIdentite
        });

        // Envoi vers backend ici
    };

    const ShowMessage = () => {
        toast.success('Données envoyées avec succès !')
    }


    return (
        <div className='container my-5 d-flex justify-content-center'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className='row bg-light p-5 rounded-5 col-lg-8' onSubmit={handleSubmit}>
                <h4 className='text-center fw-bold mb-4'>Demande d’extrait de mariage</h4>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Nom de l'époux" className='text-dark' value={nomEpoux} onChange={e => setNomEpoux(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Prénom de l'époux" className='text-dark' value={prenomEpoux} onChange={e => setPrenomEpoux(e.target.value)}  />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Nom de l'épouse" className='text-dark' value={nomEpouse} onChange={e => setNomEpouse(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Prénom de l'épouse" className='text-dark' value={prenomEpouse} onChange={e => setPrenomEpouse(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input type="date" className='text-dark' value={dateMariage} onChange={e => setDateMariage(e.target.value)}  />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Lieu du mariage" className='text-dark' value={lieuMariage} onChange={e => setLieuMariage(e.target.value)}  />
                </div>

                <div className="mb-3 col-lg-12">
                    <select
                        className="form-select shadow-none text-dark"
                        value={motif}
                        onChange={e => setMotif(e.target.value)}
                        
                    >
                        <option value="">Motif de la demande</option>
                        <option value="administratif">Dossier administratif</option>
                        <option value="voyage">Voyage</option>
                        <option value="emploi">Emploi</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>

                <div className="mb-4 col-lg-12">
                    <label className="form-label mb-2">Joindre une pièce d’identité</label>
                    <Input
                        type="file"
                        accept="image/*,application/pdf"
                        className="form-control text-dark"
                        onChange={e => setPieceIdentite(e.target.files ? e.target.files[0] : null)}
                        
                    />
                </div>

                <div className="mb-3 col-lg-12 d-flex justify-content-between">
                    <Link className='btn btn-dark fw-bolder border btn-sm text-center px-lg-3' to="/recup" ><FaArrowLeftLong className='me-1' /> Retour</Link>
                    <Button type="primary" htmlType="submit" onClick={ShowMessage}>
                        Soumettre la demande <GrSend />
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default RecupeMariage;
