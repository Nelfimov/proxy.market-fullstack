import { Dispatch } from 'react';
import { Form } from 'react-bootstrap';
import { Action } from '../types';

interface Props {
  action: Dispatch<Action>;
}

export function CalculatorForm(props: Props) {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='type'>
        <Form.Label>Тип прокси:</Form.Label>
        <Form.Select
          defaultValue=''
          required
          onChange={(e) =>
            props.action({
              type: 'SET_TYPE',
              payload: e.currentTarget.value,
            })
          }
        >
          <option value='' disabled hidden>
            Выберите тип прокси
          </option>
          <option value='s4i'>Серверные IPv4 индивидуальные</option>
          <option value='s4s'>Серверные IPv4 shared</option>
          <option value='s6i'>Серверные IPv6 индивидуальные</option>
        </Form.Select>
        <Form.Control.Feedback type='invalid'>
          Необходимо выбрать тип
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='country'>
        <Form.Label>Страна</Form.Label>
        <Form.Select
          defaultValue=''
          required
          onChange={(e) =>
            props.action({
              type: 'SET_COUNTRY',
              payload: e.currentTarget.value,
            })
          }
        >
          <option value='' disabled>
            Выберите страну
          </option>
          <option value='AU'>Австралия</option>
          <option value='AT'>Австрия</option>
        </Form.Select>
        <Form.Control.Feedback type='invalid'>
          Необходимо выбрать страну
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='time'>
        <Form.Label>Срок аренды:</Form.Label>
        <Form.Select
          defaultValue=''
          required
          onChange={(e) =>
            props.action({ type: 'SET_TIME', payload: e.currentTarget.value })
          }
        >
          <option value='' disabled>
            Выберите срок
          </option>
          <option value='1d'>1 день</option>
          <option value='7d'>7 дней</option>
          <option value='1m'>1 месяц</option>
        </Form.Select>
        <Form.Control.Feedback type='invalid'>
          Необходимо выбрать срок
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
}
