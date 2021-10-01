import React,{useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {FiMinus,FiPlus}from 'react-icons/fi'

import formatPrice from '../../lib/formatPrice'
import logo from '../../assets/logo.png';

import api from '../../services/api';
import './stylescart.css'




const Carrinho: React.FC = () =>{
    const {nomeProduto,id} = useParams() as any;
    const [quantidade, setQuantidade]= useState(1)

    const [produtos ,setProdutos] = useState({imagem:'',nome:'',categoria:'',valor:'',quantidade:0})

    
  const { imagem , nome, categoria, valor } = produtos;

    function increment(){
        setQuantidade(quantidade+1)
    }
    
    function decremento(){
        setQuantidade(quantidade-1)
    }

    const onInputChange = () => {
        setProdutos({imagem,nome, categoria, valor,quantidade:quantidade });
      };

    useEffect(()=>{
        async function fetchData() {
            const response = await api.get(`http://localhost:3333/products/${id}/${nomeProduto}`);
            const getProduto = response.data[0]
            setProdutos(getProduto);
          }

          fetchData()
    },[nomeProduto,id,produtos])

    const finalizarCompra= async (e:any) => {

        console.log(produtos)
        
       
    }

    return(
        <div id="finalizar-compra">
            <header>
               <img src={logo} alt="comunikime"/>

               <Link to="/produtos">
                   Voltar para lista de Produtos
               </Link>
            </header> 
        <form onSubmit={finalizarCompra}>
        <h1>Finalizar<br/>compra</h1>
            <img src={produtos.imagem}/>

            <div >
                <label >Nome do Produto:</label>
                <input type="text" id="inputBoder" name={nome} value={produtos.nome} />
            </div>

            <div >
                <label >Categoria:</label>
                <input type="text" id="inputBoder" name={categoria} value={produtos.categoria}/>
            </div>

            <div >
                <label>Quantidade:</label>
                <FiMinus id="icon" onClick={decremento}/>
                <input type="number" 
                      id="inputQuantidade" 
                      value={Number(quantidade)}
                      onChange={onInputChange} 
                />
                <FiPlus id="icon" onClick={increment} />
            </div>
            <div>
                <label >Total:</label>
                <input type="text" 
                      name={valor}
                      id="inputBoder" 
                      value={formatPrice(Number(quantidade)*(Number(produtos.valor)))}
                />
            </div>

            <button type="submit">Finalizar a compra</button>
        </form>
        </div>
    )
}

export default Carrinho