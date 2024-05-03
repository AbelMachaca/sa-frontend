import React from "react";
import Logo from "../assets/Images/footerlogo.png";

const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="d-flex flex-column justify-column-center align-items-center pt-3">
        <i className="bi bi-envelope display-3 text-white"></i>
        <h3 className="text-white mt-3">Stay informed about special offers</h3>
        <h5 className="text-white fst-italic mt-2">
          subscribe to the newsletter
        </h5>
        <div className="input-group mb-3 mt-4 w-50">
          <input
            type="text"
            className="form-control p-2"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-warning px-4" type="button" id="button-addon2">
            Button
          </button>
        </div>
      </div>

      <div className="container">
        <footer className="py-5">
          <div className="row row-cols-2 row-cols-md-4 text-white">
            <div className="d-flex align-items-center">
              <img src={"https://res.cloudinary.com/dsuuinvqp/image/upload/v1714700692/Sabzi/f4bnhlyr9lobizq8w6t9.png"} alt="" className="w-50 h-50" />
            </div>
            <div className="">
              <h4>About</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Certificate
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Market
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h4>Products</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Vegetables
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Mix Vegetables
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Fruits
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h4>Contact</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="https://www.linkedin.com/in/abelmachaca/" className="nav-link p-0 text-white" target="_blank" rel= "noopener noreferrer">
                    
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="https://drive.google.com/file/d/1z1eBL0ysi_72gM1OTwPWSCowo-5kqS7S/view?usp=sharing" className="nav-link p-0 text-white" target="_blank" rel= "noopener noreferrer">
                    
                    <span>CV</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
        </footer>
      </div>
    </div>
  );
};

export default Footer;
