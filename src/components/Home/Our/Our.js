import React from 'react';
import smile from'../../../Illustration/happy@2x.png';
import  trophy from'../../../Illustration/marketing@2x.png';
import star from'../../../Illustration/surface1@2x.png';
import rocket from'../../../Illustration/transportation@2x.png'

const Our = () => {
    return (
        <div className="row justify-content-center ">
            <div className="col-md-6"><h3>Our Achievements</h3>
            <small className="text-secondary">t is a long established fact that a reader will be distracted by<br/>
the readable content of a page when looking at its layout. The<br/>
point of using Lorem Ipsum is that it has a more-or-less normal<br/>
distribution of letter.</small></div>
            <div className="col-md-6 container justify-content-center">
                <div className="row mb-3">
                    <div className="col-md-6 d-flex"><img style={{backgroundColor:'black'}}src={smile}/><div><h4>700+</h4>
                <p>Happy Clients</p></div></div>
                <div className="col-md-6 d-flex"><img src={trophy}/><div><h4>140+</h4>
                <p>Projects Completed</p></div></div>
</div>

                <div className="row mmt-3">
                <div className="col-md-6  d-flex"><img src={star}/><div><h4>25+</h4>
                <p>Crazy Minds</p></div></div>

                <div className="col-md-6 d-flex"><img src={rocket}/><div><h4>75+</h4>
                <p>Running Projects</p></div></div>

                   
                </div>
            </div>
            
        </div>
    );
};

export default Our;