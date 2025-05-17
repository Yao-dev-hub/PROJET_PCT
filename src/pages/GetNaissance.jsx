import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { GrSend } from 'react-icons/gr';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function RecupeNaissance() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [lieuNaissance, setLieuNaissance] = useState('');
    const [nomPere, setNomPere] = useState('');
    const [nomMere, setNomMere] = useState('');
    const [motif, setMotif] = useState('');
    const [pieceIdentite, setPieceIdentite] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            nom,
            prenom,
            dateNaissance,
            lieuNaissance,
            nomPere,
            nomMere,
            motif,
            pieceIdentite
        });

        // Intégration backend ici
    };

    const ShowMessage = () => {
        toast.success('Données avec succès !')
    }

    return (
        <div className='container my-5 d-flex justify-content-center'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className='row bg-light p-5 rounded-5 col-lg-8' onSubmit={handleSubmit}>
                <h4 className='text-center fw-bold mb-4'>Demande d’extrait de naissance</h4>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} required />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)} required />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input type="date" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} required />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Lieu de naissance" value={lieuNaissance} onChange={e => setLieuNaissance(e.target.value)} required />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Nom du père" value={nomPere} onChange={e => setNomPere(e.target.value)} required />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Nom de la mère" value={nomMere} onChange={e => setNomMere(e.target.value)} required />
                </div>

                <div className="mb-3 col-lg-12">
                    <select
                        className="form-select shadow-none"
                        value={motif}
                        onChange={e => setMotif(e.target.value)}
                        required
                    >
                        <option value="">Motif de la demande</option>
                        <option value="scolarité">Scolarité</option>
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
                        className="form-control"
                        onChange={e => setPieceIdentite(e.target.files ? e.target.files[0] : null)}
                        required
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

export default RecupeNaissance;
