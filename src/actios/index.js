/*AQUI TENDREMOS LOS ACTION CREATOR , 
cada action creator es una funcion fecha*/

import { ADD_EMPLEADO, DELETE_EMPLEADO } from "./types";

export const addEmpleado= (payload) => { // recibe el nombre del pokemon
    return {
        //esto es un objeto action
        type: ADD_EMPLEADO,
        payload: payload,//objeto que contiene info para cargar , es opcional
            // PAYLO seria un objeto con los demas atributos 
        
    };
}; 

export const deleteEmpleado =(payload)=>{
    return {
        type: DELETE_EMPLEADO,
        payload:payload,
    }
}