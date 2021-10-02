import { Request, Response } from "express";
import insertProdutos from "../../core/services/ProdutosService";
import listAllProdutos from "../../core/services/GetListProdutosService"; 
import listProdutosid from "../../core/services/GetByidProdutosService";
import DeleteProdutos from "../../core/services/DeleteProdutosService";
import UpdateProdutos from "../../core/services/UpdateProdutosServices";

class ProductsController {
    public async listAll(request: Request, response: Response) {
        listAllProdutos().then((produtos) => {
            const serializeProdutos = produtos.map(items =>{
                return {
                    id:items.id,
                    nome:items.nome,
                    imagem:`http://localhost:3333/uploads/${items.imagem}`,
                    categoria:items.categoria,
                    valor:items.valor,
                    quantidade:items.quantidade    
                }
            })
            response.json(serializeProdutos);
          });
    }

    public async listunique(request: Request, response: Response) {
        const {nomeProduto,id} = request.params
        listProdutosid(nomeProduto,id).then((produtos) => {
            const serializeProdutos = produtos.map(items =>{
                return {
                    nome:items.nome,
                    imagem:`http://localhost:3333/uploads/${items.imagem}`,
                    categoria:items.categoria,
                    valor:items.valor,
                    quantidade:items.quantidade    
                }
            })
            response.json(serializeProdutos);
          });
}

    public async insertProdutos(request: Request, response: Response) {
        const {nome,quantidade,valor,categoria,imagem} = request.body;
        const produto={
            nome,
            imagem,
            categoria,
            quantidade,
            valor,
        }
        insertProdutos(produto);
        response.status(200).json("Cadastrado com Sucesso");
    }

    public async putProdutos(request: Request, response: Response) {
        const {id} = request.params;
        const produtos=request.body;


        UpdateProdutos(produtos,id).then((produtos) => {
             if(produtos != 0){
                response.status(200).json("Atualizado com sucesso");
             }else{
                response.status(400).json("Id Incorreto");
             }
          });
    }

    public async deleteProdutos(request: Request, response: Response) {
        const {id} = request.params;
        DeleteProdutos(id).then((produtos) => {
            if(produtos != 0){
                response.status(200).json("Deletado com Sucesso");
            }else{
               response.status(400).json("Id Incorreto");
            }
         });

     
    }
}


export { ProductsController };