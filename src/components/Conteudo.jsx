import Cartao from './Cartao'

export function Conteudo(view) {     
   
   
  
    if(JSON.stringify(view) === '{"view":1}'){
      
            return (              
                <>
                <Cartao page = "view1"/>
                
                </>
            )
    }
    else if(JSON.stringify(view) === '{"view":2}'){
       
        return (
        <Cartao page = "view2"/>
        )
        }
    
    
}

export default Conteudo;

