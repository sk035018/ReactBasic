import React, {useState, useEffect} from "react";
import AddEmployee from './addEmployee';
import Table from './table';
import ViewEmployee from './viewEmployee';
import UpdateEmployee from './updateEmployee';
import {ViewById, DeleteById, UpdateById} from './ActionById';
import {ViewId, UpdateId, DeleteId} from './TriggersOnId';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function Employee() {
    const [empList, setEmpList] = useState([]),
            [emp, setEmp] = useState({}),
            [index, setIndex] = useState(),
            [id, setId] = useState(1);

    const head = ["Id", "Name", "Age", "Action"];

    function doUpdate() {
        debugger;
        setEmpList(JSON.parse(localStorage.getItem('empList')));
        setId(JSON.parse(localStorage.getItem('id')));
    }
    
    useEffect(()=> {
        doUpdate();
    },[]);

    useEffect(() => {
        debugger;
        localStorage.setItem('empList', JSON.stringify(empList));
        localStorage.setItem('id', id);
    }, [empList, id]);

    function propsFromAdd(emp){
        setEmpList(empList => [...empList, emp]);
        setId(id => id + 1);
    }

    function propsFromUpdate(emp, index){
        debugger;
        empList[index] = emp;
        setEmpList(empList);
    }

    function propsFromDelete(id){
        setEmpList(empList.filter(emp => emp.id !== id));
    }

    function updateHooks(emp, index){
        setEmp(emp);
        setIndex(index);
    }
    
    return (
        <>
            <Router>
                <div className = 'route App-header'>
                    <Link to = '/'>Home</Link>
                    <Link to = '/addEmployee'>Add Employee</Link>
                    <Link to = '/viewById'>View By Id</Link>
                    <Link to = '/updateById'>Update By Id</Link>
                    <Link to = '/deleteById'>Delete By Id</Link>
                    
                    <div className = 'App-body'>
                        <Switch >
                            <Route exact path = '/addEmployee'>
                                <AddEmployee propsFromAdd = {propsFromAdd} id = {id} />
                            </Route>
                            <Route exact path = '/viewEmployee'>
                                <ViewEmployee emp = {emp} />
                            </Route>
                            <Route exact path = '/updateEmployee'>
                                <UpdateEmployee index = {index} emp = {emp} propsFromUpdate = {propsFromUpdate} />
                            </Route>

{/* ***************************** Your Use Starts Here **************************************************************** */}

                            <Route exact path = '/viewById'>
                                <ViewById />
                            </Route>
                            <Route exact path = '/updateById'>
                                <UpdateById />
                            </Route>
                            <Route exact path = '/deleteById'>
                                <DeleteById />
                            </Route >
                            <Route exact path = '/viewById/:id'>
                                <ViewId />
                            </Route>
                            <Route exact path = '/updateById/:id'>
                                <UpdateId doUpdate = {doUpdate} />
                            </Route>
                            <Route exact path = '/deleteById/:id'>
                                <DeleteId doUpdate = {doUpdate} />
                            </Route>
                            <Table empList = {empList} head = {head}  propsFunctions = {{updateHooks, propsFromDelete}} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Employee;
