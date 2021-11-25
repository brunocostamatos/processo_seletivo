import './App.css';
import Conteudo from './components/Conteudo';
import Navegacao from './components/Navegacao';
import Pesquisa from './components/Pesquisa';



function App() {
//tela de Home, que contem as top 10 musicas e a mesma tela que é apresentada quando 
//o input de pesquisa é usado

  const view = 1
  
  return (
    <div className="App">
      <div className="App-header">
        <Navegacao/>
      </div>
      <div className="App-body" id="App-body">
      <Pesquisa/>
      
      <div className="App-listagem" id="App-listagem">
      <Conteudo view={view}/> 
        </div>      
        
      </div>
    </div>
  );
}

export default App;
