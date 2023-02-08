/* el teamReducer recibe un arreglo vacio de la lista de pokemon , es la parte del estado que se modifica,
 inicialmente el proyecto debe ingresar con 0 pokemon , por eso por defecto entra con un arreglo vacio
- y a su vez el action que debe de usar para modificar el estado (viene con el pokemon que agregaremos)
 */
import { ADD_EMPLEADO , DELETE_EMPLEADO } from "../actios/types";

const empleadosReducer = (oldListEmpleados = [], action ) => {
    switch (action.type) {
        case ADD_EMPLEADO:
            return [...oldListEmpleados , action.payload];
            
            //creo una copia y agrego la info ,así no se modifica el estado recibido inicial
        case DELETE_EMPLEADO:
            return oldListEmpleados.filter( (empleadoId) => empleadoId !== action.payload.Id);
            

        default:
            return oldListEmpleados;        
    }
};

export default empleadosReducer;
