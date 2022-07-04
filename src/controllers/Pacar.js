import Pacar from "../models/PacarModels.js";
import jwt from "jsonwebtoken";

export const getPacar = async(req, res) =>
{
    try {
        const pacar = await Pacar.findAll({
            attributes:['id_pacar','nama_pacar']
        });
        res.json(pacar);
    } catch(error) {
        console.log(error);
    }
}

export const postPacar = async(req, res) => 
{
    const {id_pacar, nama_pacar} = req.body;
    try {
        await Pacar.create({
            id_pacar: id_pacar,
            nama_pacar: nama_pacar
        });
        res.json({msg: "Pacar Berhasil Di Buat"});
    } catch (error) {
        console.log(error);
    }
}