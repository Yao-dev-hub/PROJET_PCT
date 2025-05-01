import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function FormNaissance() {
  const [etape, setEtape] = useState(1)
  // Étape 1 : Infos sur l'enfant
  const [nomEnfant, setNomEnfant] = useState('');
  const [prenomEnfant, setPrenomEnfant] = useState('');
  const [dateNaissance, setDateNaissance] = useState("");
  const [lieuNaissance, setLieuNaissance] = useState('');
  const [sexe, setSexe] = useState('');
  const [dateDeclaration, setDateDeclaration] = useState("")

  // Étape 2: Infos sur le père
  const [nomPere, setNomPere] = useState("")
  const [prenomPere, setPreNomPere] = useState("")
  const [nationalitePere, setNationalitePere] = useState('');

  // Étape 3 : Infos sur la mère
  const [nomMere, setNomMere] = useState('');
  const [prenomMere, setPrenomMere] = useState('');
  const [nationaliteMere, setNationaliteMere] = useState('');

  // Fichiers : Infos sur les pièces à uploader
  const [pieceIdentitePere, setPieceIdentitePere] = useState(null);
  const [pieceIdentiteMere, setPieceIdentiteMere] = useState(null);
  const [certificatNaissanceHopital, setCertificatNaissanceHopital] = useState(null);

  const navigate = useNavigate()

  const submitFile = (e, setter, types) => {
    const file = e.target.files[0]
    if (file) {
      const isValidType = types.includes(file.type)
      const isValidSize = file.size <= 2 * 1024 * 1024

      if (!isValidType) {
        alert("Format de fichier invlide , veillez choisir un fichier format jpeg , png ou pdf ")
        return
      }

      if (!isValidSize) {
        alert("Fichier volumineux , veillez choisir un fichier inférieur à 2 Mo")
      }
      setter(file)
    }
  }

  //Fonction pour vider le formulaire
  const videForm = () => {
    setNomEnfant("")
    setPrenomEnfant("")
    setDateNaissance("")
    setLieuNaissance("")
    setSexe("")
    setDateDeclaration("")
    setNomPere("")
    setPreNomPere("")
    setNationalitePere("")
    setNomMere("")
    setPrenomMere("")
    setNationaliteMere("")
    setPieceIdentitePere(null)
    setPieceIdentiteMere(null)
    setCertificatNaissanceHopital(null)
    setEtape(1)
  }

  //Fonction pour passer aux champs suivant du formulaire
  const suivant = () => {
    setEtape(etape + 1)
  }

  //Fonction pour retourner en arrière 
  const arriere = () => {
    setEtape(etape - 1)
  }

  //Fonction pour soumettre le formulaire
  const submitForm = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("nomEnfant", nomEnfant)
    formData.append("prenomEnfant", prenomEnfant)
    formData.append("dateNaissance", dateNaissance)
    formData.append("dateDeclaration", dateDeclaration)
    formData.append("sexe", sexe)
    formData.append("lieuNaissance", lieuNaissance)
    formData.append("nomPere", nomPere)
    formData.append("prenomPere", prenomPere)
    formData.append("nationalitePere", nationalitePere)
    formData.append("nomMere", nomMere)
    formData.append("prenomMere", prenomMere)
    formData.append("nationaliteMere", nationaliteMere)
    formData.append("pieceIdentitePere", pieceIdentitePere)
    formData.append("pieceIdentiteMere", pieceIdentiteMere)
    formData.append("certificatNaissanceHopital", certificatNaissanceHopital)


    try {

      const req = await fetch("http://localhost:2025/api/naissance", {
        method: "post",
        body: formData
      })

      const res = await req.json()
      if (res.message === "ok") {
        videForm()
        console.log(res.data)
        setTimeout(() => {
          toast.success('Déclaration ajouté avec succès !')
        }, 5000)
        localStorage.setItem("extraitId", res.data._id)

      } else {
        console.log(res.message)
        toast.error(res.message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="card p-lg-3 border-0 col-lg-12">
            <div className="card-body row justify-content-between align-items-center ">
              <div className="col-lg-6">
                <form className="row shadow shadow-md-none p-4" onSubmit={(e) => submitForm(e)}>
                  {etape === 1 && (
                    <>
                      <div className="row">
                        <div className="text-center fw-bolder bg-light mx-md-auto ms-3 p-2 my-3 w-md-75 ">Étape {etape} / 4</div>
                        <h4 className='text-center fw-bold my-3 p-lg-2 mx-auto'>Information sur l'enfant</h4>
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="nomEnfant" className="form-label">Nom de l'enfant</label>
                          <input type="text" className="form-control shadow-none" value={nomEnfant} id="nomEnfant" name="nomEnfant" placeholder="Entrez le nom de l'enfant" onChange={(e) => setNomEnfant(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="prenomEnfant" className="form-label">Prenom de l'enfant</label>
                          <input type="text" className="form-control shadow-none" value={prenomEnfant} id="prenomEnfant" name="prenomEnfant" placeholder="Entrez le prenom de l'enfant" onChange={(e) => setPrenomEnfant(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="lieu" className="form-label">Lieu de naissance</label>
                          <input type="text" className="form-control shadow-none" value={lieuNaissance} id="lieu" name="lieu" placeholder="Lieu de naissance de l'enfant" onChange={(e) => setLieuNaissance(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="date" className="form-label">Date de naissance</label>
                          <input type="date" className="form-control shadow-none" value={dateNaissance} id="date" name="date" onChange={(e) => setDateNaissance(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="declaration" className="form-label">Date de la déclaration</label>
                          <input type="date" className="form-control shadow-none" value={dateDeclaration} id="declaration" name="declaration" onChange={(e) => setDateDeclaration(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <select name="sexe" className='form-select shadow-none' id='sexe' required value={sexe} onChange={(e) => setSexe(e.target.value)}>
                            <option value="" disabled>-- Choisissez le sexe --</option>
                            <option value="Masculin">Masculin</option>
                            <option value="Féminin">Féminin</option>
                          </select>
                        </div>
                        <div className="mb-3 d-flex justify-content-end">
                          <button className="btn btn-warning fw-bolder" onClick={suivant}>Suivant<i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                      </div>
                    </>
                  )}

                  {etape === 2 && (
                    <>
                      <div className="text-center fw-bolder bg-light ms-3 p-2 my-3 mx-md-auto  w-md-75">Étape {etape} / 4</div>
                      <h4 className='text-center fw-bold my-3 p-2 '>Information sur le père</h4>
                      <div className="row">
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="nomPere" className="form-label">Nom du père</label>
                          <input type="text" className="form-control shadow-none" value={nomPere} id="nomPere" name="nomPere" placeholder="Nom du père" onChange={(e) => setNomPere(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="prenomPere" className="form-label">Prenom du père</label>
                          <input type="text" className="form-control shadow-none" value={prenomPere} id="prenomPere" name="prenomPere" placeholder="Prenom du père" onChange={(e) => setPreNomPere(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-12">
                          <label htmlFor="nationalite-pere" className="form-label">Nationalité du père</label>
                          <input type="text" className="form-control shadow-none" value={nationalitePere} id="nationalite-pere" name="nationalite-pere" placeholder="Nationalité du père" onChange={(e) => setNationalitePere(e.target.value)} required />
                        </div>
                        <div className="mb-3 d-flex justify-content-between" >
                          <button className="btn btn-dark fw-bolder" onClick={arriere}><i className="fa-solid fa-arrow-left"></i> retour</button>
                          <button className="btn btn-warning fw-bolder" onClick={suivant}>Suivant <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                      </div>
                    </>
                  )}

                  {etape === 3 && (
                    <>
                      <div className="text-center fw-bolder bg-light ms-3 p-2 my-3  mx-md-auto  w-md-75">Étape {etape} / 4</div>
                      <h4 className='text-center fw-bold my-3 p-2 '>Information sur la mère</h4>
                      <div className="row">
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="nomMere" className="form-label">Nom de la mère</label>
                          <input type="text" className="form-control shadow-none" value={nomMere} id="nomMere" name="nomMere" placeholder="Nom de la mère" onChange={(e) => setNomMere(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-6">
                          <label htmlFor="prenomMere" className="form-label">Prenom de la mère</label>
                          <input type="text" className="form-control shadow-none" value={prenomMere} id="prenomMere" name="prenomMere" placeholder="Prenom de la mère" onChange={(e) => setPrenomMere(e.target.value)} required />
                        </div>
                        <div className="mb-3 col-lg-12">
                          <label htmlFor="nationalit-mere" className="form-label">Nationalité de la mère</label>
                          <input type="text" className="form-control shadow-none" value={nationaliteMere} id="nationalit-mere" name="nationalit-mere" placeholder="Nationalité de la mère" onChange={(e) => setNationaliteMere(e.target.value)} required />
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                          <button className="btn btn-dark fw-bolder" onClick={arriere}><i className="fa-solid fa-arrow-left"></i> retour</button>
                          <button className="btn btn-warning fw-bolder" onClick={suivant}>Suivant <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                      </div>
                    </>
                  )}

                  {etape === 4 && (
                    <>
                      <div className="text-center fw-bolder bg-light ms-3 p-2 my-3  mx-md-auto  w-md-75">Étape {etape} / 4</div>
                      <h4 className='text-center fw-bold my-3 p-2 '>Information sur les pièces à fournir</h4>
                      <div className="row">
                        <label htmlFor="acteNaissance">Choisir la pièce d'identité du père</label>
                        <div className="input-group mb-3">
                          <input type="file" className="form-control shadow-none" name="pieceIdentitePere" id="pieceIdentitePere" accept='application/pdf , image/jpeg , image/png' onChange={(e) => submitFile(e, setPieceIdentitePere, ["application/pdf", "image/jpeg", "image/png"])} required />
                        </div>

                        <label htmlFor="photoIdentite">Choisir la pièce d'identité de la mère</label>
                        <div className="input-group mb-3">
                          <input type="file" className="form-control shadow-none" id="pieceIdentiteMere" name="pieceIdentiteMere" accept="application/pdf , image/jpeg, image/png" onChange={(e) => submitFile(e, setPieceIdentiteMere, ["application/pdf", "image/jpeg", "image/png"])} required />
                        </div>

                        <label htmlFor="codePostal">Choisir le certificat de naissance de l'hopital</label>
                        <div className="mb-3 col-lg-12">
                          <input type="file" className="form-control shadow-none" id="certificatNaissanceHopital" name="certificatNaissanceHopital" accept="application/pdf, image/jpeg, image/png" onChange={(e) => submitFile(e, setCertificatNaissanceHopital, ["application/pdf", "image/jpeg", "image/png"])} required />
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                          <button className="btn btn-dark fw-bolder" onClick={arriere}><i className="fa-solid fa-arrow-left"></i> retour</button>
                          <button className="btn btn-success fw-bolder" type='submit'>Valider <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                      </div>
                    </>
                  )}
                </form>
              </div>
              <div className="col-lg-5 img1"></div>
            </div>
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  )
}

export default FormNaissance