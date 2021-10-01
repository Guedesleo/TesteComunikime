import React,{useCallback,useEffect ,useState,useRef}from 'react';
import {Link,useParams,useHistory} from 'react-router-dom';

import { FormHandles } from '@unform/core';
import {Form} from '@unform/web';

import logo from '../../assets/logo.png';
import './stylesInsert.css';

import api from '../../services/api';
import Input from '../../components/input';

 interface ProfileFormData{
    nome:string,categoria:string,valor:string,quantidade:string
 }

const UpdateProdutos: React.FC = () =>{

    const formRef = useRef<FormHandles>(null);
    const {nomeProduto,id} = useParams() as any;
    
    const history = useHistory();


    const [produtos ,setProdutos] = useState({nome:'',categoria:'',valor:'',quantidade:''})


    useEffect(()=>{
        async function fetchData() {
            const response = await api.get(`http://localhost:3333/products/${id}/${nomeProduto}`);
            const getProduto = response.data[0]
            setProdutos(getProduto);
          }
          fetchData()
    },[nomeProduto,id,produtos])


 
    const handleSubmit = useCallback(
        async (data: ProfileFormData) => {
            await api.put(`/products/${id}`,data)
            alert("Atualizado com sucesso")
            history.push('/produtos');
        },[id,history]
    )
    return (
        <div id="page-create-produto">
        <header>
           <img src={logo} alt="comunikime"/>

           <Link to="/produtos">
               Voltar para lista de Produtos
           </Link>
        </header> 


        <Form ref={formRef} initialData={{
            nome:produtos.nome,
            categoria:produtos.categoria,
            quantidade:produtos.quantidade,
            valor:produtos.valor,
        }} onSubmit={handleSubmit}>
            <h1>Atualizar os <br/> produtos</h1>
                    <div className="field-group">
                      <div className="field">
                          <label htmlFor="name">Nome do produto</label>
                          <Input
                                name="nome"
                                type="text"
                                placeholder="Nome do Produto"
                            />
                      </div>

                      <div className="field">
                          <label htmlFor="email">Categoria</label>
                             <Input
                                name="categoria"
                                type="text"
                                placeholder="Categoria"
                            />
                      </div>
                    </div>

                    <div className="field-group">
                      <div className="field">
                          <label htmlFor="name">Quantidade</label>
                          <Input
                                name="quantidade"
                                type="text"
                                placeholder="Quantidade"
                            />
                      </div>

                      <div className="field">
                          <label htmlFor="email">Valor</label>
                          <Input
                                name="valor"
                                type="text"
                                placeholder="Valor"
                            />
                      </div>
                    </div>

                    <button type="submit">Atualizar o  Produto</button>
        </Form>
    </div>
    )
}

export default UpdateProdutos