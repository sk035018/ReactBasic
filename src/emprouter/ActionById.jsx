import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';

// *********************************** File of Your Use ********************************************************

export function ViewById() {
    const [id, setId] = useState(0);
    let history = useHistory();

    return (
        <div className = 'border'>
            <input 
                type = 'text'
                name = 'id'
                value = {id}
                onChange = {(e) => {setId(e.target.value)}}
            />
            <button
                onClick = {() => {history.push(`/viewById/${+id}`)}}
            >View</button>
        </div>
    );
}

export function UpdateById() {
    const [id, setId] = useState(0);
    let history = useHistory();

    return (
        <div className = 'border'>
            <input 
                type = 'text'
                name = 'id'
                value = {id}
                onChange = {(e) => {setId(e.target.value)}}
            />
            <button
                onClick = {() => {history.push(`/updateById/${+id}`)}}
            >Update</button>
        </div>
    );
}


export function DeleteById() {
    const [id, setId] = useState(0);
    let history = useHistory();

    return (
        <div className = 'border'>
            <input 
                type = 'text'
                name = 'id'
                value = {id}
                onChange = {(e) => {setId(e.target.value)}}
            />
            <button
                onClick = {() => {history.push(`/deleteById/${+id}`)}}
            >Delete</button>
        </div>
    );
}