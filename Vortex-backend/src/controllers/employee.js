const modelEmployee = require("../models/employee");
const ErrorResponse = require('../helpers/ErrorResponse');



const getAllEmployees = async (req, res,next) => {
    try {
        if (Object.keys(req.query).length === 0) { // no le paso ningun query solo para poder ver todos los elementos
        
            const empleados = await modelEmployee.getAllEmployees(0, 0);
            res.json({
                totalRow: empleados.totalRow,
                data: empleados.resultado
    
            });
        } else {
            if (Object.keys(req.query).length === 1 && (req.query.pagina!= undefined)) {//numero de pagina 
                const pagina = parseInt(req.query.pagina);
                const empleados = await modelEmployee.getAllEmployees(pagina, 0);
                res.json({
                    paginastotal: empleados.cantPag,
                    data: empleados.resultado
                });
        
        
            } else {
                console.log("estoy en la parte grosa  ")
                const { pagina, nombre, apellido, finicio, ffin, rol } = req.query;
        
                const filtro = { nombre, apellido, finicio, ffin, rol };
        
                const empleados = await modelEmployee.getAllEmployees(pagina, filtro);
                res.json({ 
                    paginastotal:empleados.cantPag,
                    data: empleados.resultado });
        
            }
        }
    } catch (error) {
        next( 
            res.status(500).json({mensaje: 'error interno'})
            //new ErrorResponse('error en controllador', 500 )
        );
    }
    


};

const getEmployeById = async (req, res,next) => {
    try {
        const { id } = req.params;
        const empleado = await modelEmployee.getEmployeById(id);
        console.log(empleado);

        if (empleado.length != 0) {

            res.json({ data: empleado });
        }
        else {
            res.status(404).json({ mensaje: "el empleado no existe " })
        }

    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 404 )
        );
    }
};
const createEmploye = async (req, res,next) => {
    try {
        const { first_name, last_name, cuit, team_id, join_date, rol } = req.body;
        const empleado = { first_name, last_name, cuit, team_id, join_date, rol };
        const empleado_creado = await modelEmployee.createEmploye(empleado);
        const getempleado = await modelEmployee.getEmployeById(empleado_creado.insertId);//recupero el empleado creado 
        res.status(201).json({
            mensaje: "cargado con exito",
            data: getempleado
        });
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};

const updateEmployee = async (req, res,next) => {
    try {
        const { first_name, last_name, cuit, team_id, join_date, rol } = req.body;
        const { id } = req.params;
        const empleado = { first_name, last_name, cuit, team_id, join_date, rol };
        const getempleado = await modelEmployee.getEmployeById(id);
        
        if (getempleado.length != 0) {
            const empleado_actualizado = await modelEmployee.updateEmployee(id, empleado);
            const getempleado = await modelEmployee.getEmployeById(id);

            res.json({ data: getempleado });
        }
        else {
            res.status(404).json({ mensaje: "el empleado no existe " })
        }

    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};

const deleteEmployee = async (req, res,next) => {
    try {
        const { id } = req.params;
        const getempleado = await modelEmployee.getEmployeById(id);

        if (getempleado.length != 0) {
            const empleado = await modelEmployee.deleteEmployee(id);
            res.json({
                mensaje: "se eliminno con exito"
            });
        } else {
            res.status(404).json({ mensaje: "UPS!! el empleado no existe " })
        }
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};

module.exports = {
    getAllEmployees,
    getEmployeById,
    createEmploye,
    updateEmployee,
    deleteEmployee
}