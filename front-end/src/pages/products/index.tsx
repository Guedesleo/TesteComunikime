import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import formatPrice from '../../lib/formatPrice';
import {Link} from 'react-router-dom';
import {FiEdit,FiTrash2}from 'react-icons/fi';

import Logo from '../../assets/logo.png';
import './stylesList.css'

interface ItemProdutos{
    id:number,
    nome:string,
    imagem:string,
    categoria:string,
    valor:number,
    quantidade:number
}

const Produtos = () =>{
    

    const [items, setItems]= useState<ItemProdutos[]>([])

    useEffect(()=>{
        api.get('products').then(response =>{
            setItems(response.data)
        })
    },[items])

    const handlerDeleteProduto = (id:number) =>{
            api.delete(`products/${id}`).then(response =>{
               alert(response.data)
            })
    }


    return(
        <div id="produtos">
            <div className="header">
                <header>
                  <img src={Logo} alt="Logo" />

                  <Link to="/vendas">
                    Voltar para lista de Produtos
                </Link>
                </header>
                
            </div>
            <main>
               <Link to="/create-produtos" id="create-produtos"><strong>Cadastrar Produto</strong></Link>

                <div>
                    <table>
                         <thead>
                             <tr>
                                 <th>Nome Produto</th>
                                 <th>Quantidade</th>
                                 <th>Valor</th>
                                 <th>Ação</th>
                             </tr>
                         </thead>
                         <tbody>
                         {items.map(item =>(
                             <tr>
                                 <th>{item.nome}</th>
                                 <th>{item.quantidade}</th>
                                 <th>{formatPrice(item.valor)}</th>
                                 <th>
                                     <Link to={`/update-produtos/${item.id}/${item.nome}`} className="edit"><FiEdit/></Link>
                                     <Link to="/produtos" onClick={() =>handlerDeleteProduto(item.id)} className="delete"><FiTrash2/></Link>
                                 </th>
                             </tr>
                         ))}
                         </tbody>
                     </table>   
                </div> 
            </main>
        </div>
 
    )
}

export default Produtos