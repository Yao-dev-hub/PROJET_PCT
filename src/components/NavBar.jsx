import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../styles/all.style.css"


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-bar">
            <Container>
                <Navbar.Brand href="/" className='text-white fw-bolder'><img src="/embleme.png" className='me-2'  width={50} alt="logo" />DigiActes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                    <Nav.Link href="/" className='text-white fw-bolder'>
                            Accueil
                        </Nav.Link>
                        <Nav.Link href="/declare" className='text-white fw-bolder'>
                            Déclarations
                        </Nav.Link>
                        <Nav.Link href="/recup" className='text-white fw-bolder'>
                            Récupérations
                        </Nav.Link>
                        <Nav.Link href="/contact" className='text-white fw-bolder'>
                            Contactez-nous
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/inscription" className='text-white fw-bold  inscrit-btn btn btn-sm bg-success '>S'inscrire</Nav.Link>
                        <Nav.Link href="/connexion" className='text-dark fw-bold btn btn-sm bg-light ms-lg-1'>
                            Se connecter
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;