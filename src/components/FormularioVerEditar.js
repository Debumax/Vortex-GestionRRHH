import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { editarEmpleado } from "../actios";

const Formulario=(props)=>{

    const navegar= useNavigate();
    const [stateForm,setStateForm]=useState(0);
    const [boton,setBoton]=useState('Editar');//editar /guardar
    const [botonVC,setBotonVC]=useState('Home');//home / cancelar
    const [isDisabled,setIsDisabled]=useState(true);//habilita/deshabilita los input
 
    
    //estados iniciales
    const [id,setId]=useState('');
    const [nombre,setNombre]=useState('');
    const [nombre2,setNombre2]=useState('');
    const [telefono,setTelefono]=useState('');
    const [contratacion,setContratacion]=useState('');
    const [salario,setSalario]=useState('');
    const [comision,setComision]=useState(''); 
    const [ver_empleado,setVer_empleado]=useState(props.lista.find(emp => emp.EMPLOYER_ID === props.id));// lo que obtengo de la lista de empleads
    const [emp,setEmp]=useState('');


    useEffect( () => {    

            setNombre(ver_empleado.FIRST_NAME);
            setNombre2(ver_empleado.LAST_NAME);
            setTelefono(ver_empleado.PHONE_NUMBER);
            setContratacion(ver_empleado.HIRE_DATE);
            setSalario(ver_empleado.SALARY);
            setComision(ver_empleado.COMMISSION_PCT);
            setId(ver_empleado.EMPLOYER_ID);

    },[]);

    // me lleva  a editar-empleado o desencadena el update 
    const BtonIrA=(e)=>{
        e.preventDefault();
        if (boton==='Editar') {
            setBoton('Guardar');
            setBotonVC('Cancelar');
            setIsDisabled(false); // por ahora cuando le doy clic a editar se bloqueara , para ver si funciona 
        }
        if (boton==='Guardar') {
            //me va a renderizar los valores o va a ir al inicio mas + un cartel de guardo los cambios

            const empEditado={
                EMPLOYER_ID:id ,
                FIRST_NAME:nombre,
                LAST_NAME:nombre2,
                PHONE_NUMBER:telefono,
                HIRE_DATE:contratacion,
                SALARY:salario,
                COMMISSION_PCT:comision
                
            }
            //console.log(empEditado);
            props.editarEmpleado(empEditado);
            setIsDisabled(true);
            setBoton('Editar');
            setBotonVC('Home');
            alert('guardo los cambios');          
            
        }
    };

    //me lleva al home (volver) o al "vista de ver" (cancelar)
    const BtnAtras=(e)=>{
        navegar('/')
    };


    const manejarCambio= (e)=>{
            const valor= e.target.value;
            const name= e.target.name;
                    
            switch (name) {
                case 'nombre':    
                    setNombre(valor);                        
                    break;
                case 'nombre2':
                    setNombre2(valor);
                    break;
                case 'telefono':
                    setTelefono(valor); 
                    break;
                case 'contratacion':
                    setContratacion(valor);
                    break;
                case 'salario':
                    setSalario(valor);
                    break;
                case 'comision':
                    setComision(valor);  
                    break;
                default:
                    break;
            }           

    };


    return (
        <div className="container">
            
        <h1 className="display-4 container">Empleado</h1>
    
            <form className="row g-3 "  onSubmit={BtonIrA}>
                <div className="col-md-4">
                    <label className="form-label">First name </label>
                    <input type="text" className="form-control" name="nombre"  value={nombre}  id="input_clic" onChange={manejarCambio}  disabled={isDisabled} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" name="nombre2" value={nombre2}  id="input_clic" onChange={manejarCambio}  disabled={isDisabled} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" name="telefono" value={telefono}  id="input_clic" onChange={manejarCambio}  disabled={isDisabled} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Hire Date</label>
                    <input type="text" className="form-control" name="contratacion" value={contratacion}  id="input_clic" onChange={manejarCambio}  disabled={isDisabled} required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Salary : $</span>
                    <input type="text" className="form-control" name="salario" value={salario}  id="input_clic"  onChange={manejarCambio}  disabled={isDisabled} required/>
                    <span className="input-group-text">.00</span>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Commission</label>
                    <input type="text" className="form-control" name="comision"  value={comision}  id="input_clic" onChange={manejarCambio}  disabled={isDisabled} required />
                </div>
    
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" >{boton}</button>
                    <button className="btn btn-primary" onClick={BtnAtras} >{botonVC}</button> 
                    
                </div>
            </form>
    
        </div>
    );

};

const mapStateToProps = state => {
    return { lista : state.listaEmpleados}
 };

export default connect(mapStateToProps,{editarEmpleado})(Formulario);

            /*
            FIRST_NAME:nombre,
            LAST_NAME:nombre2,
            PHONE_NUMBER:telefono,
            HIRE_DATE:contratacion,
            SALARY:salario,
            COMMISSION_PCT:comision, 
            */