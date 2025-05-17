import React, { useState } from 'react';
import { Card, Button, Modal, Select, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const demandesInit = [
  { id: 1, nom: 'Jean Dupont', type: 'Naissance', action: 'Déclaration', statut: 'En attente' },
  { id: 2, nom: 'Fatou Diop', type: 'Mariage', action: 'Récupération', statut: 'En attente' }
];

const Demandes = () => {
  const [demandes, setDemandes] = useState(demandesInit);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDemande, setSelectedDemande] = useState(null);
  const [decision, setDecision] = useState(null);
  const [file, setFile] = useState(null);

  const showModal = (demande) => {
    setSelectedDemande(demande);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (!decision) return message.error('Veuillez choisir une décision');
    const updated = demandes.map((d) =>
      d.id === selectedDemande.id ? { ...d, statut: decision } : d
    );
    setDemandes(updated);
    setIsModalOpen(false);
    message.success(`Réponse envoyée à ${selectedDemande.nom}`);
    setDecision(null);
    setFile(null);
  };

  return (
    <Card>
      <h5>Demandes en attente</h5>
      <table className="table" style={{ width: '100%', marginTop: 16 }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Demande</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id}>
              <td>{demande.nom}</td>
              <td>{demande.type}</td>
              <td>{demande.action}</td>
              <td>{demande.statut}</td>
              <td>
                <Button type="link" onClick={() => showModal(demande)}>Répondre</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title={`Répondre à ${selectedDemande?.nom}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <Select
          placeholder="Choisir une réponse"
          onChange={setDecision}
          style={{ width: '100%', marginBottom: 16 }}
        >
          <Option value="Accepté">Accepté</Option>
          <Option value="Rejeté">Rejeté</Option>
        </Select>

        <Upload beforeUpload={(file) => { setFile(file); return false; }}>
          <Button icon={<UploadOutlined />}>Ajouter un document (PDF)</Button>
        </Upload>
        {file && <p style={{ marginTop: 10 }}>Fichier sélectionné : {file.name}</p>}
      </Modal>
    </Card>
  );
};

export default Demandes;