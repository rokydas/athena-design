import React from 'react';
import logo from '../../../Illustration/Group 86.png'
const Navbar = () => {
  return (
    <div className="custom-container mb-5">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a href="/"><img src={logo} style={{ height: '70px' }} alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active  mr-3">
              <a className="nav-link" href="/"><b>Home</b> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Services</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Pricing</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link active" href="#">Our Team</a>
            </li>

            <li>
              <button className="custom-btn">Contact us</button>
            </li>


          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;