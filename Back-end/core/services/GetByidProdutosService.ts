import db from "../../database/database"


const listProdutosid =  async (nomeProduto:string,id:string, ) => {
    const consultar = await db.query(` select * from produtos where id=${id} and nome='${nomeProduto}'`);
    return consultar.rows;
};

export default listProdutosid