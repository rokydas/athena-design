import React from 'react';
import './What.css';
import blue from '../../../Illustration/Group 65@2x.png';
import green from '../../../Illustration/Group 66@2x.png';
import red from '../../../Illustration/Group 69@2x.png';
import violet from '../../../Illustration/Group 72@2x.png'


const What = () => {
    return (
        <div className="mt-5 pt-5 custom-container text-center">
            <div className="mb-5">
                <h3>What we do</h3>
                <small className="text-secondary">Our main focus is to make the User Experience very<br />simple and easy. Simplicity is our Strength.</small>
            </div>

            <div className="row">

                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="service">
                        <img className="img-fluid" src={blue} /><br /><br />
                        <h6>Experience Design</h6>
                        <small className="text-secondary">The point of using Lorem<br />Ipsum is that it has a more-or<br />less normal.</small>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="service">
                        <img className="img-fluid" src={green} /><br /><br />
                        <h6>Interface Design</h6>
                        <small className="text-secondary">The point of using Lorem<br />Ipsum is that it has a more-or<br />less normal.</small>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="service">
                        <img className="img-fluid" src={red} /><br /><br />
                        <h6>Prototyping</h6>
                        <small className="text-secondary">The point of using Lorem<br />Ipsum is that it has a more-or<br />less normal.</small>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="service">
                        <img className="img-fluid" src={violet} /><br /><br />
                        <h6>Illustration</h6>
                        <small className="text-secondary">The point of using Lorem<br />Ipsum is that it has a more-or<br />less normal.</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default What;