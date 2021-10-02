import db from "../../database/database"


const DeleteProdutos =  async (id:string) => {
    const deletar = await db.query(` delete from produtos where id = ${id}`);
  
    return deletar.rowCount;
};

export default DeleteProdutos