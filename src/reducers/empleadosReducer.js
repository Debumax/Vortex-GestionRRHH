/* el teamReducer recibe un arreglo vacio de la lista de pokemon , es la parte del estado que se modifica,
 inicialmente el proyecto debe ingresar con 0 pokemon , por eso por defecto entra con un arreglo vacio
- y a su vez el action que debe de usar para modificar el estado (viene con el pokemon que agregaremos)
 */
import { ADD_EMPLEADO , DELETE_EMPLEADO, EDIT_EMPLEADO } from "../actios/types";

const empleadosReducer = (oldListEmpleados = [], action ) => {
    switch (action.type) {
        case ADD_EMPLEADO:
            //creo una copia y agrego la info ,así no se modifica el estado recibido inicial
            return [...oldListEmpleados , action.payload];
           

            //busco el empleado y con el filter creo una copia sin ese elemento
        case DELETE_EMPLEADO:
            return oldListEmpleados.filter( (empleado) => empleado.EMPLOYER_ID !== action.payload);
            

        case EDIT_EMPLEADO:
            console.log(action.payload);
            const {EMPLOYER_ID,FIRST_NAME,LAST_NAME,PHONE_NUMBER,HIRE_DATE,SALARY,COMMISSION_PCT}= action.payload;
            
            let listaModificada = oldListEmpleados.map( (emp)=>{
                if (emp.EMPLOYER_ID === action.payload.EMPLOYER_ID) {
                    emp.FIRST_NAME=FIRST_NAME;
                    emp.LAST_NAME=LAST_NAME;
                    emp.PHONE_NUMBER=PHONE_NUMBER;
                    emp.HIRE_DATE=HIRE_DATE;
                    emp.SALARY=SALARY;
                    emp.COMMISSION_PCT=COMMISSION_PCT;
                    
                }
                return emp;
            });
            return listaModificada;
            
        //     return oldListEmpleados.map((empleado)=>{ 
        //         if (empleado.EMPLOYER_ID=== action.payload.EMPLOYER_ID) {
        //             empleado.FIRST_NAME=action.payload.FIRST_NAME,
        //             empleado.LAST_NAME=action.payload.LAST_NAME,
        //             empleado.PHONE_NUMBER=action.payload.PHONE_NUMBER,
        //             empleado.HIRE_DATE=action.payload.HIRE_DATE,
        //             empleado.SALARY=action.payload.SALARY,
        //             empleado.COMMISSION_PCT=action.payload.COMMISSION_PCT,
        //             empleado.EMPLOYER_ID=action.payload.EMPLOYER_ID
        //         }
        //     });

        default:
            return oldListEmpleados;  
                  
    }
};

export default empleadosReducer;
/*
             FIRST_NAME:nombre,
                LAST_NAME:nombre2,
                PHONE_NUMBER:telefono,
                HIRE_DATE:contratacion,
                SALARY:salario,
                COMMISSION_PCT:comision,
                EMPLOYER_ID:id 
*/