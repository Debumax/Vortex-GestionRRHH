import React from "react";
import { Link } from "react-router-dom";

const FilaEmpleado=(props) =>{
    return (
        <tr>
            
            <td>{props.emp.FIRST_NAME}</td>
            <td>{props.emp.LAST_NAME}</td>
            <td>{props.emp.PHONE_NUMBER}</td>
            <td>{props.emp.HIRE_DATE}</td>
            <td>{props.emp.SALARY}</td>
            <td>{props.emp.COMMISSION_PCT}</td>
            <td>
                <Link to={'/empleado/show'} id = {props.emp. EMPLOYER_ID}>VER</Link>
                <Link to={'/empleado/delete'} id = {props.emp. EMPLOYER_ID}>DELETE</Link>
            </td>            

        </tr>

    );
};
export default FilaEmpleado;