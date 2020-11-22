import React from 'react';
import laptop from '../../../Illustration/20 [Converted]@2x.png'
import './Stay.css';

const Stay = () => {
    return (
        <div className="custom-container">
            <div className="row flex-column-reverse flex-md-row mt-5">

                <div className="col-md-6 d-flex justify-content-center">
                    <img className="img-fluid" width="90%" src={laptop} />
                </div>

                <div className="col-md-6 d-flex align-items-center">
                    <div className="stay-text">
                        <h2>Stay Running & Project</h2>
                        <p className="text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at it layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.
                        </p>
                        <button className="custom-btn">Contact us</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stay;