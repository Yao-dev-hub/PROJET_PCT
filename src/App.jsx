import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Chargement from "./components/Chargement";

// Lazy-loaded pages
const Home = lazy(() => import("./components/Home"))
const Naissance = lazy(() => import("./pages/CreateNaissance"))
const InscriptionPage = lazy(() => import("./pages/InscriptionPage"))
const ConnexionPage = lazy(() => import("./pages/ConnexionPage"))
const RecuperationPage = lazy(() => import("./pages/RecuperationPage"))
const CreateMariage = lazy(() => import("./pages/CreateMariage"))
const DeclarationPage = lazy(() => import("./pages/Declaration"))
const Contact = lazy(() => import("./components/Contact"))
const NotFound = lazy(() => import("./components/NotFound"))
const CreateDeces = lazy(() => import("./pages/CreateDeces"))
const GetNaissance = lazy(() => import("./pages/GetNaissance"))
const GetMariage = lazy(() => import("./pages/GetMariage"))
const GetDeces = lazy(() => import("./pages/GetDeces"))
const Dashbord = lazy(() => import("./pages/DashbordPage"))

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes avec NavBar et Footer */}
        <Route element={
          <>
            <NavBar />
            <Suspense fallback={<Chargement />}>
              <Outlet />
            </Suspense>
            <Footer />
          </>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/declare" element={<DeclarationPage />} />
          <Route path="/create-naissance" element={<Naissance />} />
          <Route path="/create-mariage" element={<CreateMariage />} />
          <Route path="/create-deces" element={<CreateDeces />} />
          <Route path="/recup" element={<RecuperationPage />} />
          <Route path="/recup-naissance" element={<GetNaissance />} />
          <Route path="/recup-mariage" element={<GetMariage />} />
          <Route path="/recup-deces" element={<GetDeces />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Route Dashboard sans NavBar ni Footer */}
        <Route 
          path="/dash" 
          element={
            <Suspense fallback={<Chargement />}>
              <Dashbord />
            </Suspense>
          } 
        />

        {/* Route Not Found avec NavBar et Footer */}
        <Route 
          path="*" 
          element={
            <>
              <NavBar />
              <Suspense fallback={<Chargement />}>
                <NotFound />
              </Suspense>
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;