// PaiementModal.jsx
import React from 'react';
import { Modal, Button } from 'antd';

const PaiementModal = ({ visible, onCancel, onConfirm }) => {
    return (
        <Modal
            title="Paiement requis"
            open={visible}
            onCancel={onCancel}
            width={650}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Retour
                </Button>,
                <Button key="submit" type="#7cb305" onClick={onConfirm} className='fw-bold ' style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>
                    Confirmer le paiement
                </Button>
            ]}
        >
            <div className="d-flex flex-column flex-lg-row align-items-center">
                <div className="mb-3 mb-lg-0 me-lg-4">
                    <img src="/paiment1.png" alt="Illustration paiement" width={250} />
                </div>
                <div>
                    <p className='fw-semibold'>
                        Le coût total de la demande est de <strong>2000 FCFA</strong>, incluant : <br />
                        <strong>500 FCFA</strong> pour le timbre, <strong>1000 FCFA</strong> pour la déclaration, et <strong>500 FCFA</strong> pour les frais de service.<br />
                        Vous devez effectuer ce paiement avant de soumettre votre demande de document (extrait de naissance, de mariage ou de décès).
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default PaiementModal;