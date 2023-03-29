import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';

export function NavBar() {
  return (
    <Navbar collapseOnSelect variant='dark' bg='dark' expand='sm'>
      <Container fluid='md'>
        <Navbar.Brand href='#'>
          <img src={logo} alt='logo' />
        </Navbar.Brand>
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
