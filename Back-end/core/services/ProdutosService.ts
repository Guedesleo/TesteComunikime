import db from "../../database/database"

import protudos from '../../core/interface/protudos';

const insertProdutos = async (
    produtos:protudos
  ) => {
    await db.query(`INSERT INTO produtos VALUES (
                                                    DEFAULT,
                                                    '${produtos.imagem}',
                                                    '${produtos.nome}',
                                                    '${produtos.categoria}',
                                                    '${produtos.valor}',                                                 
                                                    '${produtos.quantidade}'
                                                    )`);

    return
}



export default insertProdutos;