import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const EmpleadoCreate= () => {
 
    const [id,setId]=useState('');
    const [nombre,setNombre]=useState('');
    const [nombre2,setNombre2]=useState('');
    const [telefono,setTelefono]=useState('');
    const [contratacion,setContratacion]=useState('');
    const [salario,setSalario]=useState('');
    const [comision,setComision]=useState('');
    const [list,setList]=useState();

    const manejarCambio= (e)=>{
        const valor= e.target.value;
        const name= e.target.name;

         switch (name) {
             case 'nombre':
                 setNombre(valor);
                //  console.log('cambio en nombre 1 ');                              
                 break;
             case 'nombre2':
                 setNombre2(valor);
                //  console.log('cambio en nombre 2 ');
                 break;
             case 'telefono':
                 setTelefono(valor);
                //  console.log('cambio en telefono');
                 break;
             case 'contratacion':
                 setContratacion(valor);
                //  console.log('cMambio de contratacion');
                 break;
            case 'salario':
                setSalario(valor);
                // console.log('cambio en salario' )   ;  
                break;
            case 'comision':
                setComision(valor);
                // console.log('camvio en comision');
            default:
                 break;
         }

    };


    const manejarEnvio= e => {
        e.preventDefault();
        
        setId(1);
        const nuevoEmpleado = {
            EMPLOYER_ID: uuidv4() ,
            FIRST_NAME:nombre,
            LAST_NAME:nombre2,
            PHONE_NUMBER:telefono,
            HIRE_DATE:contratacion,
            SALARY:salario,
            COMMISSION_PCT:comision,       
        };

        setList(nuevoEmpleado);
        console.log(nuevoEmpleado);

    }; 

    return (
        <div className="container">
            <h1 className="display-4 container"> Nuevo Empleado</h1>

            <form className="row g-3 " onSubmit={manejarEnvio} >
                <div className="col-md-4">
                    <label className="form-label">First name </label>
                    <input type="text" className="form-control" name="nombre"  value={nombre} onChange={manejarCambio} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" name="nombre2" value={nombre2} onChange={manejarCambio} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" name="telefono" value={telefono}onChange={manejarCambio} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Hire Date</label>
                    <input type="text" className="form-control" name="contratacion" value={contratacion} onChange={manejarCambio} required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Salary : $</span>
                    <input type="text" className="form-control" name="salario" placeholder="ponga muchos numeros aqui $$$$ " value={salario} onChange={manejarCambio} required/>
                    <span className="input-group-text">.00</span>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Commission</label>
                    <input type="text" className="form-control" name="comision" onChange={manejarCambio} value={comision} required />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit" >Guardar</button>
                    {/* <Link to={`/`} class="btn btn-primary" type="submit"></Link> */}
                </div>
            </form>

        </div>

    );
};
export default EmpleadoCreate;