import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="text-center">
                <p className="pt-5 pl-5 pr-5 mt-5" style={{ fontSize: '30px' }}>Get your design right, right now</p>
                <p className="text-secondary mb-5">Be the first know our latest offers and updates!</p>
            </div>

            <form className="mb-5 form-inline d-flex justify-content-between search-bar">
                <input style={{position: 'relative'}} type="text" className="form-control email-box" width="80px" placeholder="Enter your email address" />
                <button style={{poition: 'absolute'}} type="submit" className="submit-btn" >Get Started</button>
            </form>

        </div>
    );
};

export default Contact;