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
    <>
      <Row sm={2} className='justify-content-center'>
        <Image
          // width='700px'
          className='self-align-center mx-auto'
          fluid
          rounded
          src={image}
        />
      </Row>
      <NavLink
        to='/buy-proxie'
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <Row sm={2} className='justify-content-center m-1'>
          <Button variant='primary'>Купить прокси</Button>
        </Row>
      </NavLink>
      <NavLink
        to='/contacts'
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <Row sm={2} className='justify-content-center m-1'>
          <Button variant='outline-primary'>Контакты</Button>
        </Row>
      </NavLink>
    </>
  );
}
