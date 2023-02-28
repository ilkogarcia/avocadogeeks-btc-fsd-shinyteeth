// Importa el modelo Sequelize que usamos para gestionar la tabla Producto
const { tbl_User } = require("../models/index");

module.exports = class UserCtrl {

    static async apiGetAllUsers(req, res){
        try {
            const usersList = await tbl_User.findAll();
            if (!usersList) {
                res.status(404).json("¡No existen usuarios en la base de datos!");
            }
            res.json(usersList);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }
};