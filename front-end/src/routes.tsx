import React from 'react';
import {Route , BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Vendas from './pages/Vendas';
import Produtos from './pages/products';
import CreateProduto1 from './pages/products/insertProdutos'; 
import UpdateProdutos from './pages/products/UpdateProduto';
import Carrinho from './pages/cart';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Vendas} path="/vendas"/>
            <Route component={Produtos} path="/produtos"/>
            <Route component={CreateProduto1} path="/create-produtos"/>
            <Route component={UpdateProdutos} path="/update-produtos/:id/:nomeProduto"/>
            <Route component={Carrinho} path="/carrinho/:id/:nomeProduto"/>
        </BrowserRouter>
    )
}

export default Routes