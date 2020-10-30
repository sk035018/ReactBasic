import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function UpdateEmployee({propsFromUpdate, emp, index}) {
    const [name, setName] = useState(emp.name),
            [age, setAge] = useState(emp.age);

    let history = useHistory();

    return (
        <div className = 'border'>
            Id : {emp.id} <br/><br/>
            Name : <input
                type = "text"
                name = "name"
                value = {name}
                onChange = {e => setName(e.target.value)}
            /><br/><br/>
            Age : <input
                type = "text"
                name = "age"
                value = {age}
                onChange = {e => setAge(e.target.value)}
            /><br/><br/>

            <button
                onClick = {() => {
                    const emp0 = {
                        id : emp.id,
                        name : name ? name : emp.name,
                        age : age ? age : emp.age,
                    }
                    propsFromUpdate(emp0, index);
                    history.push('/');
                }}
            >Update</button>
        </div>
    )
}

export default UpdateEmployee;