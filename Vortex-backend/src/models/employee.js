const connection = require('./../database/db');

const getAllEmployees = async (pagina, filtro) => {
    try {
        const context = await connection.getConnection();
        const limite = 5;
        const inicio = (pagina - 1) * limite;

        if (pagina==0 && filtro==0) {
            
            const resultado = await context.query("SELECT * from employee  ORDER BY last_name ASC");
            const totalRow= resultado.length;
           const respuesta = {
            totalRow,
            resultado
           }
            return respuesta;
        } else {

            if (Object.keys(filtro).length !== 0) {
                //hago el filtrado + paginacion en orden asce 
                //la paginacion depende de la consulta

                let sql = 'SELECT * FROM employee WHERE true ';
                let sql1 = '';
                let sql2 = '';
                let sql3 = '';
                let sql4 = '';
                let valores = [];

                const { nombre, apellido, finicio, ffin, rol } = filtro;

                if (nombre) {

                    console.log("en el condicional de nombre ")
                    sql += ' AND first_name = ? ';
                    valores.push(nombre)

                }
                if (apellido) {
                    console.log("en el condicional de apellido ")
                    sql += ' AND last_name = ? ';
                    valores.push(apellido)

                }
                if (finicio || ffin) {
                    if (finicio && ffin) { // si ambas fechas estan pasadas
                        console.log("en el condicional de ambas fechas  ")
                        sql += ' AND join_date BETWEEN ? AND ? ';
                        valores.push(finicio, ffin)

                    } else {
                        if (finicio) {
                            console.log("en el condicional de fechas inicial  ")
                            sql += ' AND join_date >= ?';
                            valores.push(finicio)
                        } else {
                            console.log("en el condicional de fecha final  ")
                            sql += ' AND join_date <= ? ';
                            valores.push(ffin);
                        }
                    }
                }
                if (rol) {
                    console.log("en el condicional de rol ")
                    sql += ' AND rol = ? ';
                    valores.push(rol);
                }

                sql += ` ORDER BY last_name ASC LIMIT ${limite}  OFFSET ${inicio} `;

                console.log('resultado de valores', valores)

                const resultado = await context.query(sql, valores);

                console.log('resultado de consulta', resultado)

                const cantidadRow = resultado.length;
                const cantPag = Math.ceil(cantidadRow / limite);

                const respuesta = {
                    cantPag,
                    resultado
                }
                return respuesta

            } else {
                // hago solo paginacion y muestro de forma asc por apellido
                const cantidadDB = await context.query(`SELECT * from employee`);
                const cantidadRow = cantidadDB.length;
                const cantPag = Math.ceil(cantidadRow / limite);

                const resultado = await context.query(`SELECT * from employee  ORDER BY last_name ASC LIMIT ${limite}  OFFSET ${inicio} `);

                console.log("cantidad de paginas ", cantPag);
                console.log("cantidad de row ", cantidadRow);

                const respuesta = {
                    cantPag,
                    resultado
                }
                return (respuesta);
            }
        }



    } catch (error) {

    }
};

const getEmployeById = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("SELECT * FROM employee WHERE id_employee=?", [id]);
        return (resultado);
    } catch (error) {

    }
};

const createEmploye = async (empleado) => {
    try {
        const { first_name, last_name, cuit, team_id, join_date, rol } = empleado;
        const context = await connection.getConnection();

        const resultado = await context.query("INSERT INTO employee( first_name, last_name, cuit, team_id, join_date, rol) VALUES (?,?,?,?,?,?)", [first_name, last_name, cuit, team_id, join_date, rol]);
        return (resultado);
    } catch (error) {

    }
};

const updateEmployee = async (id, empleado) => {
    try {
        const { first_name, last_name, cuit, team_id, join_date, rol } = empleado;
        const context = await connection.getConnection();
        const resultado = context.query("UPDATE employee SET first_name=IFNULL(?,first_name),last_name=IFNULL(?,last_name),cuit=IFNULL(?,cuit),team_id=IFNULL(?,team_id),join_date=IFNULL(?,join_date),rol=IFNULL(?,rol) WHERE id_employee=?", [first_name, last_name, cuit, team_id, join_date, rol, id]);
        return (resultado);
    } catch (error) {

    }
};

const deleteEmployee = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("DELETE FROM employee WHERE id_employee=?", [id]);
        return (resultado);
    } catch (error) {

    }
};

module.exports = {
    getAllEmployees,
    getEmployeById,
    createEmploye,
    updateEmployee,
    deleteEmployee
}