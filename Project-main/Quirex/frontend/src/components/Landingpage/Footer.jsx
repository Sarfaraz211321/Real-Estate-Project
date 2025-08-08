// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import payment from "../../assets/payment-4.png";

// import { FaFacebookF, FaTwitter, FaInstagram, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="text-light pt-5 pb-3" style={{ backgroundColor: "#121212" }}>
//       <div className="container">
//         <div className="row">

//           {/* Column 1 - Logo & Info */}
//           <div className="col-md-3 mb-4">
//             <h4 className="text-danger d-flex align-items-center">
//               <FaHome className="me-2" />
//               Quirex
//             </h4>
//             <p className="small">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//             <p className="small mb-2"><FaHome className="me-2" /> AMETHI, LUCKNOW, INDIA</p>
//             <p className="small mb-2"><FaPhoneAlt className="me-2" /> +91-7080012327</p>
//             <p className="small mb-3"><FaEnvelope className="me-2" /> mohdsarfarazkhan237@gmail.com</p>
//             <div>
//               <a href="#" className="text-light me-3"><FaFacebookF /></a>
//               <a href="#" className="text-light me-3"><FaTwitter /></a>
//               <a href="#" className="text-light"><FaInstagram /></a>
//             </div>
//           </div>

//           {/* Column 2 - Company */}
//           <div className="col-md-2 mb-4">
//             <h6 className="text-white fw-bold">Company</h6>
//             <ul className="list-unstyled small">
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">About</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Blog</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">All Products</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Location Map</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">FAQ</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Column 3 - Services */}
//           <div className="col-md-2 mb-4">
//             <h6 className="text-white fw-bold">Services</h6>
//             <ul className="list-unstyled small">
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Order Tracking</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Wish List</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Login</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">My Account</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Promotional Offers</a></li>
//             </ul>
//           </div>

//           {/* Column 4 - Customer Care */}
//           <div className="col-md-2 mb-4">
//             <h6 className="text-white fw-bold">Customer Care</h6>
//             <ul className="list-unstyled small">
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Login</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">My Account</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Wish List</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Order Tracking</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">FAQ</a></li>
//               <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Column 5 - Newsletter */}
//           <div className="col-md-3 mb-4">
//             <h6 className="text-white fw-bold">Newsletter</h6>
//             <p className="small">Subscribe to our weekly newsletter and receive updates via email.</p>
//             <form className="d-flex mb-3">
//               <input type="email" className="form-control me-2" placeholder="Email" />
//               <button className="btn btn-danger">→</button>
//             </form>
//             <p className="small mb-2">We Accept</p>
//             <div>
//                  <img src={payment} alt="house" className="img-fluid rounded"  />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="d-flex justify-content-between pt-3 mt-3 border-top border-secondary flex-wrap">
//           <p className="small mb-0">All Rights Reserved © Company 2024</p>
//           <div className="d-flex gap-3 small">
//             <a href="#" className="text-light text-decoration-none">Terms & Conditions</a>
//             <a href="#" className="text-light text-decoration-none">Cookies</a>
//             <a href="#" className="text-light text-decoration-none">Privacy & Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import payment from "../../assets/payment-4.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{ backgroundColor: "#121212" }}
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row">
          {/* Column 1 - Logo & Info */}
          <div className="col-md-3 mb-4">
            <h4 className="text-danger d-flex align-items-center">
              <FaHome className="me-2" />
              Quirex
            </h4>
            <p className="small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="small mb-2">
              <FaHome className="me-2" /> AMETHI, LUCKNOW, INDIA
            </p>
            <p className="small mb-2">
              <FaPhoneAlt className="me-2" /> +91-7080012327
            </p>
            <p className="small mb-3">
              <FaEnvelope className="me-2" /> mohdsarfarazkhan237@gmail.com
            </p>
            <div>
              <a href="#" className="text-light me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-light">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div className="col-md-2 mb-4">
            <h6 className="text-white fw-bold">Company</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  All Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Location Map
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="col-md-2 mb-4">
            <h6 className="text-white fw-bold">Services</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Order Tracking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Wish List
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  My Account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Promotional Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Customer Care */}
          <div className="col-md-2 mb-4">
            <h6 className="text-white fw-bold">Customer Care</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  My Account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Wish List
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Order Tracking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div className="col-md-3 mb-4">
            <h6 className="text-white fw-bold">Newsletter</h6>
            <p className="small">
              Subscribe to our weekly newsletter and receive updates via email.
            </p>
            <form className="d-flex mb-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Email"
              />
              <button className="btn btn-danger">→</button>
            </form>
            <p className="small mb-2">We Accept</p>
            <div>
              <img
                src={payment}
                alt="house"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="d-flex justify-content-between pt-3 mt-3 border-top border-secondary flex-wrap">
          <p className="small mb-0">All Rights Reserved © Company 2024</p>
          <div className="d-flex gap-3 small">
            <a href="#" className="text-light text-decoration-none">
              Terms & Conditions
            </a>
            <a href="#" className="text-light text-decoration-none">
              Cookies
            </a>
            <a href="#" className="text-light text-decoration-none">
              Privacy & Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;