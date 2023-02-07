import React , { useState } from "react";
import EmpleadoShow from "./EmpleadoShow";


/*
export default[
{
    "EMPLOYER_ID": 1,
    "FIRST_NAME":"debora",
    "LAST_NAME":"debu" ,
    "PHONE_NUMBER":1234567897,
    "HIRE_DATE":"nose que es",
    "SALARY":12.5,
    "COMMISSION_PCT": "comiison 2"
},
{
    "EMPLOYER_ID": 2,
    "FIRST_NAME":"josefa",
    "LAST_NAME":"debu" ,
    "PHONE_NUMBER":789456,
    "HIRE_DATE":"cosas que pasan",
    "SALARY":5.5,
    "COMMISSION_PCT": "comiison 3"
}    
];

*/



const EmpleadoList = () => {
    const [lista,setLista]= useState([]);
    
    return (
        <main className="container">
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th></th>
                    </tr>
                    
                </thead>
                <tbody>
                    {/* {usuarios.map(user => ( */}
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>programadora</td>
                            <td>action</td>
                        </tr>

                    {/* ))}                     */}
                </tbody>
            </table>
        </main>

    );
};

export default EmpleadoList;