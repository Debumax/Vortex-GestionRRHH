/* el teamReducer recibe un arreglo vacio de la lista de pokemon , es la parte del estado que se modifica,
 inicialmente el proyecto debe ingresar con 0 pokemon , por eso por defecto entra con un arreglo vacio
- y a su vez el action que debe de usar para modificar el estado (viene con el pokemon que agregaremos)
 */
const empleadosReducer = (oldList = [], action ) => {
    switch (action.type) {
        case 'ADD_EMPLEADO' :
            return [...oldList , action.payload.name];
            //creo una copia y a esa copia el agrego el pokemon, no se modifica el estado recibido
        case 'DELETE_EMPLEADO' :
            return oldList.filter( (empleadoId) => empleadoId !== action.payload.Id);
        
        
            default:
            return oldList;        
    }
};
export default empleadosReducer;
