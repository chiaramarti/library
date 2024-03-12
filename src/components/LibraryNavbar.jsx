import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FaShoppingCart, FaBook} from 'react-icons/fa';


const LibraryNavbar = function () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <FaBook/> | Library 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#booking">Categories</Nav.Link>
              <Nav.Link href="#contacts">Authors</Nav.Link>
              <Nav.Link href="#about">Contacts</Nav.Link>
              <Nav.Link href="#about"> <FaShoppingCart /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default LibraryNavbar