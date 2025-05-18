import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { GrSend } from 'react-icons/gr';
import toast, { Toaster } from 'react-hot-toast';
import PaiementModal from './paiement';

function FormDeces() {
  const [etape, setEtape] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const suivant = () => setEtape(etape + 1);
  const retour = () => setEtape(etape - 1);
  const ShowMessage = () => {
    toast.success('Successfully toasted!')
  }

      //Fonction pour confirmer le paiement
    const handlePaiementConfirm = () => {
        setModalVisible(false)
        ShowMessage()
    }

  return (
    <div className='container d-flex justify-content-center align-items-center my-5'>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4 extrait-image">
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <img src="/deces.jpeg" width={400} alt="image extrait de décès" />
        </div>
        <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center">
          <h5 className='fw-bold mb-4'>
            Veuillez remplir correctement tous les champs de l'étape
            <span className='btn btn-danger rounded-circle px-3 fw-bolder text-white py-1 mx-2'>{etape}</span>
          </h5>

          <form className='row bg-light p-5 rounded-5'>
            {etape === 1 && (
              <>
                <div className="my-4 col-lg-6">
                  <Input type="text" className='text-dark' placeholder="Nom du défunt" />
                </div>
                <div className="my-4 col-lg-6">
                  <Input type="text" className='text-dark' placeholder="Prénom du défunt" />
                </div>
                <div className="mb-4 col-lg-12">
                  <Input type="datetime-local" className='text-dark' placeholder="Date du décès" />
                </div>
                <div className="mb-4 col-lg-12">
                  <Input type="text" className='text-dark' placeholder="Lieu du décès" />
                </div>
                <div className="mb-3 col-lg-12 d-flex justify-content-end">
                  <Button type="primary" className='btn-sm' onClick={suivant}>
                    Suivant <FaArrowRightLong />
                  </Button>
                </div>
              </>
            )}

            {etape === 2 && (
              <>
                <div className="my-4 col-lg-6">
                  <Input type="text" placeholder="Nom du déclarant" />
                </div>
                <div className="my-4 col-lg-6">
                  <Input type="text" placeholder="Prénom du déclarant" />
                </div>
                <div className="mb-4 col-lg-12">
                  <Input type="text" placeholder="Lien avec le défunt" />
                </div>
                <div className="mb-4 col-lg-12">
                  <Input type="tel" placeholder="Numéro du déclarant" />
                </div>
                <div className="mb-3 col-lg-12 d-flex justify-content-between">
                  <Button onClick={retour}><FaArrowLeftLong /> Retour</Button>
                  <Button type="primary" onClick={suivant}>Suivant <FaArrowRightLong /></Button>
                </div>
              </>
            )}

            {etape === 3 && (
              <>
                <div className="my-4 col-lg-12">
                  <label htmlFor="pieceIdentite" className='mb-2'>Pièce d'identité du déclarant</label>
                  <Input type="file" id="pieceIdentite" className='form-control' accept="image/*,application/pdf" />
                </div>
                <div className="mb-4 col-lg-12">
                  <label htmlFor="certificatDeces" className='mb-2'>Certificat médical de décès</label>
                  <Input type="file" id="certificatDeces" className='form-control' accept="image/*,application/pdf" />
                </div>
                <div className="mb-3 col-lg-12 d-flex justify-content-between">
                  <Button onClick={retour}><FaArrowLeftLong /> Retour</Button>
                  <Button type="primary" onClick={() => setModalVisible(true)}>
                    Soumettre <GrSend />
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <PaiementModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handlePaiementConfirm}
      />
    </div>
  );
}

export default FormDeces;
