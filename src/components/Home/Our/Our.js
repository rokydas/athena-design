import React from 'react';
import smile from '../../../Illustration/happy@2x.png';
import trophy from '../../../Illustration/marketing@2x.png';
import star from '../../../Illustration/surface1@2x.png';
import rocket from '../../../Illustration/transportation@2x.png';
import './Our.css';

const Our = () => {
    return (
        <div className="custom-container mt-5 pt-5">
            <div className="row">

                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex align-items-center our-text">
                    <div>
                        <h2>Our Achievements</h2>
                        <p className="text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-4 d-flex justify-content-center text-center">
                    <div>
                        <div className="achievement d-flex">
                            <div className="d-flex align-items-center mr-5">
                                <img height="60px" src={smile} />
                            </div>
                            <div>
                                <h2>700+</h2>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <br />

                        <div className="achievement d-flex">
                            <div className="d-flex align-items-center mr-5">
                                <img height="60px" src={trophy} />
                            </div>
                            <div>
                                <h2>140+</h2>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center text-center">
                    <div>
                        <div className="achievement d-flex">
                            <div className="d-flex align-items-center mr-5">
                                <img height="60px" src={star} />
                            </div>
                            <div>
                                <h2>25+</h2>
                                <p>Crazy Minds</p>
                            </div>
                        </div>

                        <br />

                        <div className="achievement d-flex">
                            <div className="d-flex align-items-center mr-5">
                                <img height="60px" src={rocket} />
                            </div>
                            <div>
                                <h2>75+</h2>
                                <p>Running Projects</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Our;