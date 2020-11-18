import React from 'react';
import PricingSingle from '../PricingSingle/PricingSingle';
import './Pricing.css';
import { pricingData } from './pricingData';
const Pricing = () => {

    return (
        <div className="pricing">
            <h1 className="p-5">CHOOSE YOUR DEDICATED TEAM</h1>
            <div className="row">
                <div className="col-md-4">
                    {
                        pricingData.map(pricing => <PricingSingle pricing={pricing} key={pricing.id} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Pricing;