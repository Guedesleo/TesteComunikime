import db from "../../database/database"
import Protudos from "../interface/protudos";

const UpdateProdutos =  async (produtos:Protudos, id:string) => {
    console.log()
    const update = await db.query(`Update produtos set   
                                                    imagem='${produtos.imagem}', 
                                                    nome='${produtos.nome}',
                                                    categoria='${produtos.categoria}',
                                                    quantidade=${produtos.quantidade},
                                                    valor=${produtos.valor}
                                                    where id=${id}`
);
  
    return update.rowCount;
};

export default UpdateProdutos