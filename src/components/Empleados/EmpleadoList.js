import React from "react";
import { connect } from "react-redux";
import FilaEmpleado from "../FilaEmpleado";


const EmpleadoList = (props) => { 
    
    const renderGrilla= () => {
        return props.lista.map( emp => {
            return <FilaEmpleado datosEmpleado = {emp} key ={emp.EMPLOYER_ID} />

        });
    };
    
    return (
        <main className="container">
            <div>
                componente vacio
            </div>
            {renderGrilla()}

        </main>

    );
};

const mapStateToProps = state => {
   return { lista:state.listaEmpleados}
};

export default connect( mapStateToProps )(EmpleadoList);