import React, { useEffect, useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import formatPrice from '../../lib/formatPrice'

import './styles.css';
import logo from '../../assets/logo.png';

interface Produtos{
    id?:number,
    nome:string,
    imagem:string,
    categoria:string,
    valor:number,
    quantidade:number
}

const Vendas = () =>{

    const [items, setItems]= useState<Produtos[]>([])
    const [produto, setProduto]= useState('')

    useEffect(()=>{
        api.get('http://localhost:3333/products')
        .then(response => {
            setItems(response.data);
        });
    },[])

    const search=(event:any)=> {
        if (event.keyCode === 13) {
            items.forEach((item,index)=>{
                console.log(item.imagem)
                if(item.nome === produto){
                    api.get(`http://localhost:3333/products/${items[index].id}/${produto}`)
                      .then(response => {
                      setItems(response.data);
                  });
                }
            })
        }
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="logo" />
                <Link to="/"><FaShoppingCart/>Carrinho</Link>
                <Link to="/produtos">Cadastrar Produto</Link>
            </header>

            <div className="search">
                    <input className="search-input" type="text" value={produto} placeholder="Buscar..."  onKeyDown={(e)=>search(e)} onChange={(e) =>{setProduto(e.target.value)}}/>
            </div>

            <div>
                <ul className="items-grid">
                    {items.map(item =>(
                            <li>
                              {item.imagem === 'http://localhost:3333/uploads/undefined' ?(<img src='http://placehold.it/500x500' alt="imagem" />):(<img src={item.imagem} alt="imagem" />)}
                              <span>{item.nome}</span>
                              {item.quantidade > 0 ?(<span>Quantidade {item.quantidade}</span>):(<span>Não tem no estoque</span>)}
                              <span>{formatPrice(item.valor)}</span>
                              {item.quantidade > 0 ?(<Link to={`/carrinho/${item.id}/${item.nome}`}><strong>Adicionar no Carrinho</strong></Link>):(<Link to="/products" style={{backgroundColor:'gray'}} className='disabled-link'><strong>Adicionar no Carrinho</strong></Link>)}
                          </li>
                    ))}
              
                </ul>
            </div>
        </div>
    );
}

export default Vendas