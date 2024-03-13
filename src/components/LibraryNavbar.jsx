import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import { FaShoppingCart, FaBook} from 'react-icons/fa';


const LibraryNavbar = function () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <FaBook/> | Epic Library 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#horror">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#romance">Something</NavDropdown.Item>
              <NavDropdown.Item href="#romance">Sci-fi</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#contacts">Authors</Nav.Link>
              <Nav.Link href="#about">Contacts</Nav.Link>
              <Nav.Link href="#cart"> <FaShoppingCart /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default LibraryNavbar