import { useState } from "react";
import Counter1 from "../components/Event2";
import Counter from "../components/Event1";
import Menu from "../components/Menu";
import CheckLogin from "../components/Event3";
import ControlledComponent from "../components/Form1";
import Multiple from "../components/Form2";
import Uncontrolled from "../components/Form3";
import LoginForm from "../components/Form4";
import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

function ExForms(props){
    const [user1, setUsuario] = useState('')
    const {user, logout} = useAuth();
    if (!user){
      return <Navigate to="/" replace="true"/>
    }
    return <>
        <Menu/>
        <h1>Ejemplo 7</h1>
        <LoginForm usuario={user1} funcion={setUsuario}/>
        <h1>Ejemplo 6</h1>
        <Uncontrolled usuario={user1} funcion={setUsuario}/>
        <h1>Ejemplo 5</h1>
        <Multiple usuario={user1} funcion={setUsuario}/>
        <h1>Ejemplo 4</h1>
        <ControlledComponent usuario={user1} funcion={setUsuario}/>
        <h1>Ejemplo 3</h1>
        <CheckLogin usuario={user1} funcion={setUsuario}/>
        <h1>Ejemplo 2</h1>
        <Counter1 usuario={user1}/>
        <h1>Ejemplo 1</h1>
        <Counter/>
    </>
}

export default ExForms;