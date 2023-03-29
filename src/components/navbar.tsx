import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export function NavBar() {
  return (
    <Navbar bg='light' expand='sm'>
      <Container fluid='md'>
        <Navbar.Brand href='#'>Proxy.Market</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse className='justify-content-end' id='navbar'>
          <Nav activeKey='/'>
            <Nav.Item>
              <Nav.Link eventKey='/' href='/'>
                Главная
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='/about' href='/about'>
                О нас
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
