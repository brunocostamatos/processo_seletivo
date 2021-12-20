# Desafio Front-End/Processo Seletivo CAM Tecnologias 

## Avisos importantes: 

Durante o consumo da API do Deezer foi recebido avisos de erro que relatavam a necessidade 
de se utilizar CORS Anywhere para poder acessar os dados da API. Após pesquisas, foi percebido
que o responsável por testar esse código precisaria executar passos de instalação de node
cors-anywhere em sua própria máquina para poder testar o código. 
Com isso, tomei a decissão de usar uma solução documentada por outros usuários. Quando o projeto for iniciado, a home page não irá carregar elemento algum e 
será informado via console do navegador `"Error 403 (Forbidden)"`. Para corrigir é necessário acessar o link https://cors-anywhere.herokuapp.com/ e clicar no botão `"Request temporary access to the demo server"`. Com isso, o navegador conseguirá realizar a comunicação com os servidores
da API do Deezer.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000)  para visualizá-lo no navegador.

A página será recarregada se você fizer edições.

### `yarn test`

Inicia o executor de teste no modo de observação interativo.\
Consulte a seção sobre [running tests] (https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `yarn build`

Compila o aplicativo para produção na pasta `build`. \
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Com isso, seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [deployment] (https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

### `yarn eject`

**Aviso: esta é uma operação unilateral. Depois de usar `eject`, você nao pode mais voltar!**

Se não estiver satisfeito com a ferramenta de construção e as opções de configuração, você pode usar `eject` a qualquer momento. Este comando removerá a dependência única de compilação de seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas irão apontar para os scripts copiados para que você possa ajustá-los. Neste ponto, você está sozinho.

Você não precisa usar `eject`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para ela.




