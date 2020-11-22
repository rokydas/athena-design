import React from 'react';
import './Footer.css';
import logo from '../../../Illustration/Group 86.png';
import fb from '../../../Illustration/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../../Illustration/twitter (4)@2x.png';
import linkedin from '../../../Illustration/linkedin (2)@2x.png';
import dribble from '../../../Illustration/dribbble (1)@2x.png';

const Footer = () => {
    return (
        <div className="custom-container footer">
            <div className="row">
                <div className="col-md-3 mb-3">
                    <img className="img-fluid" width="100px" src={logo} alt="" /><br /><br />
                    <img width="15px" className="mr-2" src={fb} alt="" />
                    <img width="15px" className="mr-2" src={twitter} alt="" />
                    <img width="15px" className="mr-2" src={linkedin} alt="" />
                    <img width="15px" className="mr-2" src={dribble} alt="" />
                    <img width="15px" src={fb} alt="" />
                </div>
                <div className="col-md-3 mb-3">
                    <p>Features</p>
                    <p>Enterprise</p>
                    <p>Pricing</p>
                </div>
                <div className="col-md-3 mb-3">
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Status</p>
                </div>
                <div className="col-md-3 mb-3">
                    <p>About Us</p>
                    <p>Terms of service</p>
                    <p>Security</p>
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;