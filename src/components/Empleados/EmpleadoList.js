import React from "react";
import { connect } from "react-redux";
import FilaEmpleado from "../FilaEmpleado";




const EmpleadoList = (props) => { 

    //console.log(props.lista.length)
    const listado = () => {
        return props.lista.map( emp => {
            return <FilaEmpleado emp={emp} key={emp.EMPLOYER_ID} />;
        });
    };

    return (
        <main className="container">
            <div>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Fecha de Contratacion</th>
                            <th>Sueldo</th>
                            <th>Comision</th>
                            <th>Opcions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider ">
                        {listado()}                        
                    </tbody>

                </table>

            </div>
            

        </main>

    );
};

const mapStateToProps = state => {
   return { lista : state.listaEmpleados}
};


export default connect( mapStateToProps )(EmpleadoList);