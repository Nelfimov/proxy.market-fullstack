import { Container, Nav } from 'react-bootstrap';

export function Footer() {
  return (
    <Container as='footer' className='bg-secondary text-center' fluid>
      <Nav className='justify-content-center'>
        <Nav.Item>
          <Nav.Link href='https://github.com/Nelfimov/proxy.market-fullstack'>
            Github
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
