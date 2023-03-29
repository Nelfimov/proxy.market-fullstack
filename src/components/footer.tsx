import { Container, Nav } from 'react-bootstrap';

export function Footer() {
  return (
    <Container as='footer' className='bg-secondary text-center mt-4' fluid>
      <Nav className='justify-content-center'>
        <Nav.Item>
          <Nav.Link
            style={{ color: 'white' }}
            href='https://github.com/Nelfimov/proxy.market-fullstack'
          >
            Github
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
