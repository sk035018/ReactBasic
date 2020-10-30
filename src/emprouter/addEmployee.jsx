import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function AddEmployee({propsFromAdd, id}) {
    const [name, setName] = useState(""),
            [age, setAge] = useState(0);

    let history = useHistory();

    return (
        <div className = 'border'>
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
                    const emp = {id, name, age};
                    propsFromAdd(emp);
                    history.push('/');
                }}
            >Add</button>
        </div>
    );
}

export default AddEmployee;