const modelAsset = require("../models/asset");
const modelEmployee = require("../models/employee")
const ErrorResponse = require("../helpers/ErrorResponse");



const getAllAssets = async (req, res,next) => {
   try {
       const asset = await modelAsset.getAllAssets();
       res.json({ data: asset });
    
   } catch (error) {
    next( 
        new ErrorResponse('error en controllador', 404 )
    );
   }
};

const getAssetsByEmployeeId = async (req, res,next) => {
    try {
        const { id } = req.params;
        const asset = await modelAsset.getAssetsByEmployeeId(id);
        if (asset.length) {
            res.json({ data: asset });
        } else {
            res.status(401).json({ mensaje: " no se encontro asset con id de empleado ingresado" })
        }
        res.json({ data: asset });
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 404 )
        );
    }
};

const getAssetById = async (req, res,next) => {
    try {
        const { id } = req.params;
        const asset = await modelAsset.getAssetById(id);
        if (asset.length != 0) {

            res.json({ data:asset });
        }
        else {
            res.status(401).json({ mensaje: "el asset no existe " })
        }
        
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 404 )
        );
    }
};
const createAsset = async (req, res,next) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = req.body;
        const item = { id_empoyee_asset, name, type, code, marca, description, purchase_date };
        const empleado = await modelEmployee.getEmployeById(id_empoyee_asset);
        
        if (empleado.length!=0) {

            const item_creado = await modelAsset.createAsset(item);
            const asset = await modelAsset.getAssetById(item_creado.insertId);
            res.status(201).json({ data: asset });
        } else {
            res.status(401).json({ mensaje: "empleado no encontrado " });
        }


    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 404 )
        );
    }
};

const updateAsset = async (req, res,next) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = req.body;
        const { id } = req.params;
        const item = { id_empoyee_asset, name, type, code, marca, description, purchase_date };
        const getasset = await modelAsset.getAssetById(id);
        const empleado = await modelEmployee.getEmployeById(id_empoyee_asset);


        if (getasset.length !=0 && empleado.length!=0) {
            const item_actualizado = await modelAsset.updateAsset(id, item);
            const getasset = await modelAsset.getAssetById(id);
            res.json({ 
                mensaje: "actualizado con exito",
                data: getasset });
        } else {
            res.status(401).json({ mensaje: "UPS!! el asset o el empleado ingresado no existe  " })
        }
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 404 )
        );
    }
};

const deleteAsset = async (req, res,next) => {
    try {
        const { id } = req.params;
        const getasset = await modelAsset.getAssetById(id);
        if (getasset.length) {
            const asset = await modelAsset.deleteAsset(id);
            res.json({ 
                mensaje: "se eliminno con exito"});
        } else {
            res.status(401).json({ mensaje: "UPS!! el asset no existe " })
        }

    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 404 )
        );
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