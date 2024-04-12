import CatalogoRepository from "../repositories/catologoRespository.js";

class CatalogoController {

    //consulta todos os protudos
    async index(req: any, res: any) {
        try {
            const row = await CatalogoRepository.findAll();
            res.status(200).json(row);
        } catch (err) {
            res.status(404).json(err);
        }
    };

}

export default new CatalogoController();