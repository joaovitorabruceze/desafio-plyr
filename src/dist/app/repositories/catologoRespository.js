import { consulta } from "../database/conexao.js";
class CatalogoRepository {
    findAll() {
        const sql = 'SELECT * FROM produto;';
        return consulta(sql, '', 'Nenhum registro encontrado!');
    }
    ;
}
export default new CatalogoRepository();
