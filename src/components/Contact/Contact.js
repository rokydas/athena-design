import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="text-center">
                <p className="pt-5 pl-5 pr-5 mt-5" style={{ fontSize: '40px' }}>Get your design right, right now</p>
                <p className="text-secondary mb-5">Be the first know our latest offers and updates!</p>
            </div>

            <div className="search-bar">
                <form className="mb-5 form-inline">
                    <input type="text" className="form-control email-box" width="80px" placeholder="Enter your email address" />
                    <input type="submit" className="submit-btn" value="Get Started" />
                </form>
            </div>

        </div>
    );
};

export default Contact;