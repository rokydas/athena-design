import React from 'react';
import laptop from'../../../Illustration/20 [Converted]@2x.png'
const Stay = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-6">
            <img  style={{height:'500px'}}src={laptop}/>
            </div>
            <div className="col-md-6">
                <h2>Stay Running & Project</h2>
                <small className="text-secondary">It is a long established fact that a reader will be distracted by the<br/>
readable content of a page when looking at its layout. The point of<br/>
using Lorem Ipsum is that it has a more-or-less normal distribution<br/>
of letter.
</small><br/>
<button className="mr-3" style={{backgroundColor:'cyan'}} className="btn">Contact us</button>
            </div>
        </div>
    );
};

export default Stay;