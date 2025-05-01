import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Lazy-loaded pages
const Home = lazy(() => import("./components/Home"));
const Naissance = lazy(() => import("./pages/CreateNaissance"));
const InscriptionPage = lazy(() => import("./pages/InscriptionPage"));
const ConnexionPage = lazy(() => import("./pages/ConnexionPage"));
const GetPage = lazy(() => import("./pages/GetPage"));
const RecuperationPage = lazy(() => import("./pages/RecuperationPage"));
const CreateMariage = lazy(() => import("./pages/CreateMariage"));
const DeclarationPage = lazy(() => import("./pages/Declaration"));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Chargement...</div>}>
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
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
