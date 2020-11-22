import React from 'react';
import './PricingSingle.css';

const PricingSingle = ({ pricing }) => {

    const { price, forWhat, innerPage, days } = pricing;

    return (
        <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="price-single">
                <h1 style={{fontSize: '50px'}}>${price}</h1>
                <p>{forWhat}</p>
                <hr className="hori-row"/>
                <p>Homepage</p>
                <p>{innerPage} Inner Page</p>
                <p>Asset file</p>
                <p>Source file</p>
                <p>Free Stock Photos </p>
                <p>{days} Days Free Support</p>
                <p>24/7 Support</p>
                <button className="custom-btn">Order Now</button>
            </div>
        </div>
    );
};

export default PricingSingle;