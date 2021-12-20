import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";
import PrincipaisMusicas from '../functions/PrincipaisMusicas';
import InfiniteScroll from "react-infinite-scroll-component";
import BarraBusca from "../functions/BarraBusca";
import SearchAPI from "../functions/SearchAPI";

//Componente que possui as instruções de construção do cartão das músicas, como vai ocorrer a 
//funcionalidade do Player, funcionalidade de favoritar as musicas e o 
//retorno da renderização das telas através de um encadeamento de condições 
export function Cartao(page) {
  
  const pagina = JSON.stringify(page);
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const listaMusicasStorage = JSON.parse(localStorage.getItem("listaMusicas"));
  const listaFavoritas = JSON.parse(localStorage.getItem("listaFavoritas")) || [];
  const [listaMusicas, setListaMusica] = useState([]);
  const [listaLocalFavoritas, setListaLocalFavoritas] = useState(listaFavoritas);


  useEffect(() => {
    PrincipaisMusicas(setListaMusica);
    BarraBusca(0, setResultadoPesquisa);
  }, []);


  function favoritarMusica(musica, listaFavoritas, idButton, pagina) {
    if (listaFavoritas.length == 0) {
      listaFavoritas.push(musica);
      window.alert(musica.title + " foi adicionada na sua lista de músicas favoritas")
    } else {
      if (!(listaFavoritas.filter((e) => e.id === musica.id).length > 0)) {
        listaFavoritas.push(musica);
        window.alert(musica.title + " foi adicionada na sua lista de músicas favoritas")        
      } else {
        listaFavoritas = listaFavoritas.filter((e) => e.id !== musica.id);
        window.alert(musica.title + " foi retirada da sua lista de músicas favoritas")
        
      }
    }
    localStorage.setItem("listaFavoritas", JSON.stringify(listaFavoritas));
    if(pagina == "view2"){
      document.location.reload(true)
    }
    else{
      document.getElementById(idButton).hidden = "true"
    }
  }

  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      audio.volume = 0.1;
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
      <div style={{ fontSize: "35px" }}>
        <p onClick={toggle}>
          {playing ? <AiFillPauseCircle /> : <BsFillPlayCircleFill />}
        </p>
      </div>
    );
  };


  function CartaoMusica({ musica , textButton, pagina}) {
    const id_button = "Favoritar"+musica.title
    const tela = pagina
    return (
      
      <Card
        style={{
          maxWidth: "200px",
          borderRadius: "1.5rem",
          margin: "15px",
          alignItems: "center",
        }}
        id={musica.title}
      >
        <Card.Img
          style={{ borderRadius: "1.5rem" }}
          variant="top"
          src={musica.album.cover_medium}
        />
        <Card.Body
          style={{
            height: "maxContent",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            borderRadius: "1.5rem",
          }}
        >
          <Card.Title
            style={{ height: "25%", marginBottom: "10px", alignSelf: "center" }}
          >
            {musica.title}
          </Card.Title>
          <Player url={musica.preview} />
          <Card.Text style={{ marginBottom: "20px", alignSelf: "center" }}>
            {musica.artist.name}
          </Card.Text>
          <Card.Subtitle style={{ marginBottom: "10px", alignSelf: "center" }}>
            Duração: {musica.duration}s{" "}
          </Card.Subtitle>
          <Card.Link
            style={{ height: "25%", marginBottom: "10px", alignSelf: "center" , cursor:'pointer'}}
            onClick={() => window.open(musica.link, "_blank")}
          >
            Acessar versão completa
          </Card.Link>
          <Button
            style={{
              marginBottom: "10px",
              alignSelf: "center",
              backgroundColor: "tomato",
              borderColor: "tomato",
            }}
            id={id_button}

            onClick={() => favoritarMusica(musica, listaFavoritas, id_button, tela)}
          >{textButton}
          </Button>
        </Card.Body>
      </Card>
    );
  }

  

  if(listaMusicas.length == 0){
    return null
  }

  if (pagina === '{"page":"view1"}') {
    if(listaMusicas.length == 0){
      return (
        listaMusicasStorage.map((musicas) => {
          return <CartaoMusica musica={musicas} textButton={"Favoritar"} pagina={"view1"}/>
        })
      );
    }
    else{
      return(
        listaMusicas.map((musicas) => {
          return <CartaoMusica musica = {musicas} textButton={"Favoritar"} pagina={"view1"}/>
        })
      );
    }
    
  } 
  else if(pagina === '{"page":"view2"}'){
    if(listaFavoritas.length == 0){
      return <div class="AvisoFavoritasVazia">Sua lista de Favoritas está vazia 
      <br></br>:(</div>
    }
    else{
      return listaFavoritas.map((favoritas) => {
        return <CartaoMusica musica={favoritas} textButton={"Desfavoritar"} pagina={"view2"}/>;
      });
    }
  }
  else{
    //console.log("page.musica",page.musica)
    //console.log("page.musica.data", page.musica.data)
    if(page.musica.data.data.length == 0){ 
      document.getElementById("App-listagem").hidden = 'true'
      return <div class="AvisoFavoritasVazia"> Nenhum resultado foi encontrado. 
      <br></br>:(</div>
    }
    else{
      document.getElementById("App-listagem").hidden = 'false'
      return page.musica.data.data.map((pesquisa) => {
        return <CartaoMusica musica={pesquisa} textButton={"Favoritar"} pagina={"view1"}/>;
      });
      /*const lista_temp = []   
      lista_temp.push(page.musica.data, page.musica.data.next)
      console.log("lista_temp",lista_temp)
      document.getElementById("App-listagem").hidden = 'true'

      const fetchMoreData = () => {SearchAPI(page.musica.data.next, setResultadoPesquisa)}
      
      --Não consegui fazer com que esta função realizasse a busca do proximo conjunto de musicas ao descer
      o scroll, fazendo com que ocorra um excesso de entradas nesta função até que a resposta da requisição
      seja o bloqueio por parte do servidor da API--

      return(
        <InfiniteScroll next={fetchMoreData(page.musica.next, setResultadoPesquisa)} style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}} dataLength={page.musica.data.total}>
          {page.musica.data.data.map((pesquisa)=>{
            return <CartaoMusica musica={pesquisa} textButton={"Favoritar"} pagina={"view1"}/>
          })}
          </InfiniteScroll>
      )*/
    }
    
  }
  
  
}

export default Cartao;

