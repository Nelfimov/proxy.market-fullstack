import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import image from '../assets/background.webp';

export function Home() {
  return (
    <Col className='justify-content-center'>
      <Image
        width='700px'
        className='self-align-center mx-auto'
        fluid
        rounded
        src={image}
      />
      <Row>
        <Button variant='primary'>
          <NavLink to='/buy-proxie'>Купить прокси</NavLink>
        </Button>
        <Button variant='secondary'>
          <NavLink to='/contacts'>Контакты</NavLink>
        </Button>
      </Row>
    </Col>
  );
}
