import { Col, Row, Image, Badge } from 'react-bootstrap';
import mail from '../assets/mail.svg';
import telegram from '../assets/telegram.svg';
import skype from '../assets/skype.svg';

export function Contacts() {
  return (
    <>
      <h1>Контакты</h1>
      <h5 className='mt-3'>Для связи с нами</h5>
      <Row className='my-5'>
        <Col xs='1'>
          <Badge bg='light' className='p-2'>
            <Image src={mail} />
          </Badge>
        </Col>
        <Col xs='11'>
          <Row>
            <p className='fw-bold p-0 m-0'>Email</p>
          </Row>
          <Row>
            <p className='p-0 m-0' style={{ width: 'min-content' }}>
              <a href='mailto:info@proxy.market'>info@proxy.market</a>{' '}
            </p>
            <span className='fw-lighter' style={{ width: 'min-content' }}>
              администрация
            </span>
          </Row>
          <Row>
            <p className='p-0 m-0' style={{ width: 'min-content' }}>
              <a href='mailto:support@proxy.market'>support@proxy.market</a>{' '}
            </p>
            <span className='fw-lighter' style={{ width: 'min-content' }}>
              техподдержка
            </span>
          </Row>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col xs='1'>
          <Badge bg='light' className='p-2'>
            <Image src={telegram} />
          </Badge>
        </Col>
        <Col xs='11'>
          <Row>
            <p className='fw-bold p-0 m-0'>Чат бот в телеграм</p>
          </Row>
          <Row>
            <a className='p-0 m-0' href='https://t.me/proxymarket_bot'>
              @proxymarket_bot
            </a>
          </Row>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col xs='1'>
          <Badge bg='light' className='p-2'>
            <Image src={skype} />
          </Badge>
        </Col>
        <Col xs='11'>
          <Row>
            <p className='fw-bold p-0 m-0'>Skype</p>
          </Row>
          <Row>live:e4948f9f2ab44f6e</Row>
        </Col>
      </Row>
    </>
  );
}
