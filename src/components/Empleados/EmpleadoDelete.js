import React from "react";
import { connect } from "react-redux";
import { useNavigate,useParams } from 'react-router-dom'; // hook 
import { deleteEmpleado } from "../../actios";


const EmpleadoDelete=(props)=>{
    const navegar=useNavigate();

    const parametro=useParams();//hook router
    const id=parametro.empId;
    console.log('es el id mamalon'+id);
    
    const borra=()=>{
        props.deleteEmpleado(id);
        alert("se ELIMINO con exito");
        navegar('/');
    }

    return (
        <>
        <div>{parametro.empId}</div>
        
        <button onClick={borra}>borrar</button>
        
        </>
        
    );
};


export default connect(null,{deleteEmpleado} )( EmpleadoDelete);
