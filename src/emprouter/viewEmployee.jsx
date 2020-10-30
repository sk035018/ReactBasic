import React from 'react';
import {Link} from "react-router-dom";

function ViewEmployee({emp}) {
    return(
        <div className = 'border'>
            Id : {emp.id} <br/><br/>
            Name : {emp.name} <br/><br/>
            Age : {emp.age} <br/><br/>
            <Link to = "/">Go Back</Link>
        </div>
    );
}

export default ViewEmployee;