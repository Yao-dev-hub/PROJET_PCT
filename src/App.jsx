
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Naissance from "./pages/CreateNaissance"
import Footer from "./components/Footer"
import InscriptionPage from "./pages/InscriptionPage"
import ConnexionPage from "./pages/ConnexionPage"
import GetPage from "./pages/GetPage"
import RecuperationPage from "./pages/RecuperationPage"
import CreateMariage from "./pages/CreateMariage"
import DeclarationPage from "./pages/Declaration"

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-naissance" element={<Naissance />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/connexion" element={<ConnexionPage />} />
        <Route path="/extrait" element={<GetPage />} />
        <Route path="/declare" element={<DeclarationPage />} />
        <Route path="/mariage" element={<CreateMariage />} />
        <Route path="/recup" element={<RecuperationPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
