import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

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
              <NavLink to='/' className='nav-link'>
                Главная
              </NavLink>
              Главная
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/buy-proxie' className='nav-link'>
                Купить прокси
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/about' className='nav-link'>
                О нас
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
