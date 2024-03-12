import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
         <Col md={2}></Col>
          <Col md={2}>
            <a className="link" href="#">About us</a>
            <a className="link" href="#">Categories</a>
            <a className="link" href="#">Authors</a>
            <a className="link" href="#">Cart</a>
            <a className="link" href="#">Privacy</a>
            <a className="link" href="#">FAQ</a>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <address>
              123 Main Street <br />
              City, State 12345 <br />
              Phone: (123) 456-7890 <br />
              Email: info@example.com
            </address>
          </Col>
          <Col md={3}>
            <a href="https://www.instagram.com"><FaInstagram className="text-light me-4 fs-3" /></a>
            <a href="https://twitter.com"><FaTwitter className="text-light me-4 fs-3" /></a>
            <a href="https://www.facebook.com"><FaFacebook className="text-light me-4 fs-3" /></a>
            <a href="https://www.youtube.com"><FaYoutube className="text-light fs-3" /></a>
            
            <form class="my-4">
              <h5>Newsletter</h5>  
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
                <button className="btn btn-outline-light" type="button">Subscribe</button>
              </div>
            </form>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-2">© 2024 Your Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
