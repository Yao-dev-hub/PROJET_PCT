import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { GrSend } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';

function RecupeDeces() {
    const [nomDefunt, setNomDefunt] = useState('');
    const [prenomDefunt, setPrenomDefunt] = useState('');
    const [dateDeces, setDateDeces] = useState('');
    const [lieuDeces, setLieuDeces] = useState('');
    const [nomDeclarant, setNomDeclarant] = useState('');
    const [motif, setMotif] = useState('');
    const [pieceIdentite, setPieceIdentite] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            nomDefunt,
            prenomDefunt,
            dateDeces,
            lieuDeces,
            nomDeclarant,
            motif,
            pieceIdentite
        });

        // Traitement ou appel API ici
    };

    const ShowMessage = () => {
        toast.success('Successfully toasted!')
    }

    return (
        <div className='container my-5 d-flex justify-content-center'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className='row bg-light p-5 rounded-5 col-lg-8' onSubmit={handleSubmit}>
                <h4 className='text-center fw-bold mb-4'>Demande d’extrait de décès</h4>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Nom du défunt" className='text-dark' value={nomDefunt} onChange={e => setNomDefunt(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Prénom du défunt" className='text-dark' value={prenomDefunt} onChange={e => setPrenomDefunt(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input type="date"  className='text-dark' value={dateDeces} onChange={e => setDateDeces(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-6">
                    <Input placeholder="Lieu du décès" className='text-dark'  value={lieuDeces} onChange={e => setLieuDeces(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-12">
                    <Input placeholder="Nom du déclarant" className='text-dark'  value={nomDeclarant} onChange={e => setNomDeclarant(e.target.value)} />
                </div>

                <div className="mb-3 col-lg-12">
                    <select
                        className="form-select shadow-none text-dark"
                        value={motif}
                        onChange={e => setMotif(e.target.value)}

                    >
                        <option value="">Motif de la demande</option>
                        <option value="succession">Succession</option>
                        <option value="administratif">Dossier administratif</option>
                        <option value="banque">Banque ou notaire</option>
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

export default RecupeDeces;
