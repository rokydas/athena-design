import React from 'react';

const PricingSingle = ({ pricing }) => {

    const { price, forWhat, innerPage, days } = pricing;

    return (
        <div>
            <h1>${price}</h1>
            <p>For: {forWhat}</p>
            <hr />
            <p>Homepage</p>
            <p>{innerPage} Inner Page</p>
            <p>Asset file</p>
            <p>Source file</p>
            <p>Free Stock Photos </p>
            <p>{days} Days Free Support</p>
            <p>24/7 Support</p>
        </div>
    );
};

export default PricingSingle;