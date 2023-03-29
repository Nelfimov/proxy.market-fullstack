import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export function NavBar() {
  return (
    <Navbar bg='light' expand='sm'>
      <Container fluid='md'>
        <Navbar.Brand href='#'>My homework</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse className='justify-content-end' id='navbar'>
          <Nav activeKey='/'>
            <Nav.Item>
              <Nav.Link eventKey='/' href='/'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='/about' href='/about'>
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
