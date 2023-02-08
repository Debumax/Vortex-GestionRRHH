import React from "react";
import { connect } from "react-redux";
import FilaEmpleado from "../FilaEmpleado";



const EmpleadoList = (props) => { 
    

    var orden=0;
    //console.log(props.lista.length)
    const listado = () => {
        return props.lista.map( emp => {
            return <FilaEmpleado emp={emp} key={emp.EMPLOYER_ID} />;
        });
    };

    return (
        <main className="container">
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>nombre</th>
                            <th>apellido</th>
                            <th>telefono</th>
                            <th>fecha contratacion</th>
                            <th>sueldo</th>
                            <th>comision</th>
                            <th>opcions</th>
                        </tr>
                    </thead>
                    <tbody>
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