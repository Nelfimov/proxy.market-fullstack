import { Form } from 'react-bootstrap';

interface Props {}

export function CalculatorForm(props: Props) {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='type'>
        <Form.Label>Тип прокси:</Form.Label>
        <Form.Select
          defaultValue=''
          required
          onChange={(e) => e.currentTarget.checkValidity()}
        >
          <option value='' disabled hidden>
            Выберите тип прокси
          </option>
          <option value='1'>Серверные IPv4 индивидуальные</option>
          <option value='2'>Серверные IPv4 shared</option>
          <option value='3'>Серверные IPv6 индивидуальные</option>
        </Form.Select>
        <Form.Control.Feedback type='invalid'>
          Необходимо выбрать тип
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='country'>
        <Form.Label>Страна</Form.Label>
        <Form.Select defaultValue='' required disabled>
          <option value='' disabled>
            Выберите страну
          </option>
          <option value='1'>Австралия</option>
          <option value='2'>Австрия</option>
        </Form.Select>
        <Form.Control.Feedback type='invalid'>
          Необходимо выбрать страну
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='time'>
        <Form.Label>Срок аренды:</Form.Label>
        <Form.Select defaultValue='' required disabled>
          <option value='' disabled>
            Выберите срок
          </option>
          <option value='1'>1 день</option>
          <option value='2'>7 дней</option>
          <option value='3'>1 месяц</option>
        </Form.Select>
        <Form.Control.Feedback type='invalid'>
          Необходимо выбрать срок
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
}
