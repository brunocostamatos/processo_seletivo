import './App.css';
import Conteudo from './components/Conteudo';
import Navegacao from './components/Navegacao';


function App() {

  //view de Favoritas, que contem as musicas favoritadas 
  const view = 2

  return (
    <div className="App">
      <div className="App-header">
        <Navegacao/>
      </div>
      <div className="App-body">
      <div className="App-listagem">
      <Conteudo view={view}/>  
        </div>  
      </div>
    </div>
  );
}

export default App;
