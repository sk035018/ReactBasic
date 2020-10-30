import React from 'react';
import Action from './action'

// *********************************************** File of your use *********************************************

function Table({empList, head, propsFunctions}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {head.map(k =><th>{k}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {empList.map((emp, index) => {
                        return (
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td><Action emp = {emp} propsFunctions = {propsFunctions} index = {index} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;