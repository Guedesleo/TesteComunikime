import db from "../../database/database"


const listAllProdutos =  async () => {
    const consultar = await db.query(` select * from produtos`);
    return consultar.rows;
};

export default listAllProdutos