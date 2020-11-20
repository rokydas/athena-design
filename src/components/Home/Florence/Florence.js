import React from 'react';
import fish1 from'../../../Illustration/16 [Converted]@2x.png'
import './Florence.css'
const Florence = () => {
    return (
        <div className="row">
            <div  className="col-md-6"><h1 style={{fontSize:'100px'}}>Florence
agency</h1><br/>
<p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book.</p>
<button style={{backgroundColor:'cyan'}} className="btn mr-auto">See pricing</button>
</div>
            <div className="col-md-6"><img src={fish1} style={{height:"500px"}}/>
            </div>
        
            
        </div>
    );
};

export default Florence;