import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//Componente da parte superior da página, que apresenta a navegação entre as views home/pesquisa(1) 
//e favoritas(2)
export function Navegacao(){
  return (
  <Navbar bg="dark" variant="dark">
    <Container style={{margin: '0px 0px 0px 80px'}}>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favoritas">Favoritas</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
  
}

export default Navegacao
