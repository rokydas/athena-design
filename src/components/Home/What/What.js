import React from 'react';
import blue from'../../../Illustration/Group 65@2x.png';
import green from'../../../Illustration/Group 66@2x.png';
import red from'../../../Illustration/Group 69@2x.png';
import violet from'../../../Illustration/Group 72@2x.png'


const What = () => {
    return (
        <div>
            <h3>What we do</h3>
            <small className="text-secondary">Our main focus is to make the User Experience very<br/>
simple and easy. Simplicity is our Strength.</small>
<div className="row">
    <div className="col-md-3"><img src={blue}/><h6>Experience Design</h6><small className="text-secondary">The point of using Lorem<br/>
Ipsum is that it has a more-or<br/>less normal.
</small></div>
<div className="col-md-3"><img src={green}/><h6>Interface Design</h6><small className="text-secondary">The point of using Lorem<br/>
Ipsum is that it has a more-or<br/>less normal.
</small></div>
<div className="col-md-3"><img src={red}/><h6>Prototyping</h6><small className="text-secondary">The point of using Lorem<br/>
Ipsum is that it has a more-or<br/>less normal.
</small></div>
<div className="col-md-3"><img src={violet}/><h6>Illustration</h6><small className="text-secondary">The point of using Lorem<br/>
Ipsum is that it has a more-or<br/>less normal.
</small></div>
</div>
        </div>
    );
};

export default What;