import {useState } from "react";
import {BsSearch} from "react-icons/bs";
import BarraBusca from "../functions/BarraBusca";
import Cartao from "./Cartao";

//Componente que contêm o campo input de pesquisa, botão que vai chamar a função que realizará a busca na API
//do Deezer, contêm também a função que passa o resultado do que foi pesquisado para uma div de listagem
//e utiliza do componente Cartao  
export function Pesquisa() {
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]) || [];
    function BarraPesquisa(){
            return(
                
                <div style={{width:'maxContent', marginBottom:'10px', marginTop:'10px'}}>
                    <input style={{borderRadius: "0.5rem", borderStyle: 'double'}}id="input" type="text"/> 
                    <button style={{borderRadius: "0.5rem",borderStyle: 'double',marginLeft:'5px'}} onClick={()=>BarraBusca(document.getElementById('input').value, setResultadoPesquisa)}>
                        <BsSearch style={{marginBottom:'2px'}}></BsSearch>
                        </button>
                </div>
                
                
            )          
    } 
 

    function ResultadoPesquisa(resultadoPesquisa){
        var resultadoDiminuido = resultadoPesquisa.resultadoPesquisa
        if(resultadoDiminuido.data != undefined){
            //console.log(resultadoDiminuido.data)
            return (<div className="App-listagem"><Cartao musica={resultadoDiminuido} textButton="Favoritar"/></div>)
        }
        else{
            return (<></>)
        }
        
    }    
    return(
        <>
       <BarraPesquisa/>
       <ResultadoPesquisa resultadoPesquisa = {resultadoPesquisa}/>
       </>
    )
}

export default Pesquisa;
