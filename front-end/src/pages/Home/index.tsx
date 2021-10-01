import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom'

import './styles.css';

import Logo from '../../assets/logo.png'

const Home = () =>{
    return(
        <div id="page-home">
            <div className="content">
                <header>
                  <img src={Logo} alt="Logo" />
                </header>

                <main>
                    <h1>Controle de Estoque e Vendas.</h1>
                    <p>Facilitando o controle de vendas e estoques da sua empresa.</p>
                    <Link to="/vendas"><span><FiLogIn/></span><strong>Realize uma Compra</strong></Link>
                </main>
            </div>
        </div>
    )
}

export default Home
