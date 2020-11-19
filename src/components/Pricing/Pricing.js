import React from 'react';
import PricingSingle from '../PricingSingle/PricingSingle';
import './Pricing.css';
import { pricingData } from './pricingData';
const Pricing = () => {

    return (
        <div className="pricing">
            <p className="p-5" style={{fontSize: '40px'}}>CHOOSE YOUR DEDICATED TEAM</p>
            <div className="custom-container">
                <div className="row">
                    {
                        pricingData.map(pricing => <PricingSingle pricing={pricing} key={pricing.id} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Pricing;