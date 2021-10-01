import React,{useState,useRef}from 'react';
import {Link,useHistory} from 'react-router-dom';
import { FormHandles } from '@unform/core';
import {Form} from '@unform/web';

import Dropzone from '../../components/Dropzone/index';

import logo from '../../assets/logo.png';
import './stylesInsert.css';
import api from '../../services/api';
import Input from '../../components/input';

interface CreateFormData {
    nome: string;
    categoria: string;
    valor: string;
    quantidade:number;
  }
  

const CreateProduto1 = () =>{
    const formRef = useRef<FormHandles>(null);
    const [selectedFile , setSelectedFile] = useState<File>();
    const history = useHistory();

    async function handleSubmit(data:CreateFormData){
        const produto={
            imagem:selectedFile?.name,
            nome:data.nome,
            categoria:data.categoria,
            valor:Number(data.valor),
            quantidade: Number(data.quantidade)
        }

        console.log(produto)
        await api.post('products',produto)
        alert("Cadastro realizado com Sucesso.")
        history.push('/produtos');
    
    }

    return(
        <div id="page-create-produto">
        <header>
           <img src={logo} alt="comunikime"/>

           <Link to="/produtos">
               Voltar para lista de Produtos
           </Link>
        </header> 


        <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastro de <br/> produtos</h1>
                    <Dropzone onFileUploaded = {setSelectedFile}/>
          
                    <div className="field-group">
                      <div className="field">
                          <Input
                                name="nome"
                                type="text"
                                placeholder="Nome do Produto"
                            />
                      </div>

                      <div className="field">
                          <Input
                                name="categoria"
                                type="text"
                                placeholder="Categoria"
                            />
                      </div>
                    </div>

                    <div className="field-group">
                      <div className="field">
                          <Input
                                name="quantidade"
                                type="text"
                                placeholder="Quantidade"
                            />
                      </div>

                      <div className="field">
                          <Input
                                name="valor"
                                type="text"
                                placeholder="Valor"
                            />
                      </div>
                    </div>

                    <button type="submit">Cadastar um Produto</button>
        </Form>
    </div>
    )
}

export default CreateProduto1