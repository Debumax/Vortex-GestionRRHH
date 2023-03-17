const connection = require('./../database/db');

const getAllAssets = async () => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("SELECT * from asset");
        return (resultado);
    } catch (error) {
        
    }
};

const getAssetById = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("SELECT * FROM asset WHERE id_asset=?", [id]);
        return (resultado);
    } catch (error) {

    }
};

const getAssetsByEmployeeId = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("SELECT ass.id_asset, ass.id_empoyee_asset, ass.name, ass.type, ass.code, ass.marca, ass.description, ass.purchase_date FROM asset ass INNER JOIN employee on ass.id_empoyee_asset=employee.id_employee WHERE employee.id_employee=?;", [id]);
        
        return (resultado);
    } catch (error) {
        
    }
 };

const createAsset = async (item) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = item;
        const context = await connection.getConnection();

        const resultado = await context.query("INSERT INTO asset( id_empoyee_asset, name, type, code, marca, description, purchase_date) VALUES (?,?,?,?,?,?,?)", [id_empoyee_asset, name, type, code, marca, description, purchase_date]);
        //si es que recibe null , lo carga , sino no carga nada
        return (resultado);
    } catch (error) {

    }
};

const updateAsset = async (id, item) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = item;
        const context = await connection.getConnection();
        const resultado = context.query("UPDATE asset SET id_empoyee_asset=IFNULL(?,id_empoyee_asset),name=IFNULL(?,name),type=IFNULL(?,type),code=IFNULL(?,code),marca=IFNULL(?,marca),description=IFNULL(?,description),purchase_date=IFNULL(?,purchase_date) WHERE id_asset=?", [id_empoyee_asset, name, type, code, marca, description, purchase_date, id]);
        return (resultado);
    } catch (error) {

    }
};

const deleteAsset = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("DELETE FROM asset WHERE id_asset=?", [id]);
        return (resultado);
    } catch (error) {

    }
};

module.exports = {
    getAllAssets,
    getAssetsByEmployeeId,
    getAssetById,
    createAsset,
    updateAsset,
    deleteAsset
}