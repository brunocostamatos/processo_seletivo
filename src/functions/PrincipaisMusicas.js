import axios from "axios";
//Função relacionada a consumir a api do deezer e retornar com as 10 musicas presentes no "Chart" 
//Utiliza do local storage para realizar um "backup" do resultado do consumo da API
function PrincipaisMusicas(setlistaMusica){
   const listaMusicasStorage = JSON.parse(localStorage.getItem("listaMusicas"));
   axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/')
   .then((response) => {
       const listaMusicas = response.data.tracks.data
       if(listaMusicas.length > 0){
         setlistaMusica(listaMusicas);
         localStorage.setItem('listaMusicas', JSON.stringify(listaMusicas))
       }
       else{
         setlistaMusica(listaMusicas)
       }
   })
}

export default PrincipaisMusicas;

