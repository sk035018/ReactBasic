import React from 'react';

import {useHistory} from "react-router-dom";

function Action({emp, propsFunctions, index}) {
    let history = useHistory();
    return (
        <>
            <button
                onClick = {() => {
                    propsFunctions.updateHooks(emp, index);
                    history.push('/viewEmployee');
                }}
            >View</button>
            
            <button
                onClick = {() => {
                    debugger;
                    propsFunctions.updateHooks(emp, index);
                    history.push('/updateEmployee');
                }}
            >Update</button>
            <button
                onClick = {() => {
                    const flag = window.confirm("Press Ok to Delete");
                    flag && propsFunctions.propsFromDelete(emp.id);
                }}
            >Delete</button>
        </>
    );
}

export default Action;