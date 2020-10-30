import React, {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

// *********************************************** File of your use ******************************************

export const ViewId = () => {
    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();  
    const emp = empList.find(emp => emp.id === +id);
    let history = useHistory();

    if(emp) {
        return (
            <div className = 'border'>
                <h3>Id : {emp.id}</h3>
                <h3>Name : {emp.name}</h3>
                <h3>Age : {emp.age}</h3>
            </div>
        )} else {
            window.alert("No Such Employee Found");
            history.push('/viewById');
        }
};

export const UpdateId = ({doUpdate}) => {
    const [name, setName] = useState(""),
            [age, setAge] = useState("");
    let history = useHistory();
    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();
    const emp = empList.find(emp => emp.id === +id);

    if(emp) {
        const index = empList.indexOf(emp);

        return (
            <div className = 'border'>
                <h3>Id : {emp.id}</h3>
                Name : <input 
                    type = 'text'
                    name = 'name'
                    placeholder = {emp.name}
                    value = {name}
                    onChange = {(e) => {
                        setName(e.target.value);
                    }}
                /> <br/><br/>
                Age : <input 
                    type = 'text'
                    name = 'age'
                    value = {age}
                    placeholder = {emp.age}
                    onChange = {(e) => {
                        setAge(e.target.value);
                    }}
                /> <br/><br/>
                <button
                    onClick = {() => {
                        const emp0 = {
                            id : +id,
                            name : name ? name : emp.name,
                            age : age ? age : emp.age,
                        };
                        empList[index] = emp0;
                        localStorage.setItem('empList', JSON.stringify(empList));
                        doUpdate();
                        history.push('/');
                    }}
                >Update</button>
            </div>
        );
    } else {
        window.alert("No Such Employee Found !!!");
        history.push('/updateById');
    }
};

export const DeleteId = ({doUpdate}) => {
    debugger;
    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();  
    // const emp = empList.find(emp => emp.id === +id);
    let history = useHistory();
    debugger;
    // if(emp) {
        const flag = window.confirm("Are Sure You want to delete \nId : " + id);
        flag && addFilter(empList, id);
        flag && doUpdate();
        history.push('/');
    // } else {
    //     window.alert("No Such Employee Exists");
    //     history.push('/');
    // }
};

const addFilter = (empList0, id) => {
    const empList1 = empList0.filter(emp => emp.id !== +id);
    localStorage.setItem('empList', JSON.stringify(empList1));
};
