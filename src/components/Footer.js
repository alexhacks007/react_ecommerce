import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Footer.css'; // Optional for custom styles

const Footer = () => {
  return (
    <footer className="text-center text-lg-start  text-dark" style={{backgroundColor:"#D2E0FB"}}>
      {/* Social media section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="#" className="me-4 text-reset">
          <i class="bi bi-facebook"></i>
          </Link>
          <Link to="#" className="me-4 text-reset">
            <i class="bi bi-twitter-x"></i>
          </Link>
           <Link to="#" className="me-4 text-reset">
            <i class="bi bi-threads"></i>
          </Link>
          <Link to="#" className="me-4 text-reset">
            <i class="bi bi-instagram"></i>
          </Link>
          <Link to="#" className="me-4 text-reset">
            <i class="bi bi-linkedin"></i>
          </Link>
          <Link to="#" className="me-4 text-reset">
            <i class="bi bi-github"></i>
          </Link>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Information */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">ALEX E-COMMERCE</h6>
              <p>
                If you have money help to poor peoples dont buy unwanted product ,This is wast of time !
              </p>
            </div>

            {/* Products Links */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><Link to="/angular" className="text-reset">Beauty</Link></p>
              <p><Link to="/react" className="text-reset">Furniture</Link></p>
              <p><Link to="/vue" className="text-reset">Groceries</Link></p>
              <p><Link to="/laravel" className="text-reset">Fruits</Link></p>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p><Link to="/pricing" className="text-reset">Home</Link></p>
              <p><Link to="/settings" className="text-reset">Profile</Link></p>
              <p><Link to="/orders" className="text-reset">Logout</Link></p>
              <p><Link to="/help" className="text-reset">Help</Link></p>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="bi bi-house"></i> Bangalore,india</p>
              <p><i class="bi bi-envelope-at"></i> alex@gmail.com</p>
              <p><i class="bi bi-telephone"></i> +01 234 567 88</p>
              <p><i class="bi bi-printer"></i> +01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 copyright" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p>© 2024 Copyright:</p>
        
      </div>
    </footer>
  );
};

export default Footer;
