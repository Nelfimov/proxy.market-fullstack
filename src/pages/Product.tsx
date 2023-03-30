import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { Dispatch, useEffect } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { CalculatorForm } from '../components';
import { db } from '../firebase';
import { Action, State } from '../types';

export function Product() {
  const { state, dispatch } = useOutletContext<{
    state: State;
    dispatch: Dispatch<Action>;
  }>();

  useEffect(() => {
    const result = getDocs(collection(db, 'priceList')).then((res) =>
      res.forEach((item) => console.log(item.id + item.data()))
    );
  }, []);

  return (
    <>
      <h1>Купить прокси:</h1>
      <Card>
        <Card.Header>
          <h3>Онлайн калькулятор</h3>
        </Card.Header>
        <Card.Body>
          <CalculatorForm action={dispatch} state={state} />
        </Card.Body>
        <Collapse in={state.total > 0}>
          <Card.Footer>
            <Row className='align-items-center'>
              <Col>
                <h3>Сумма к оплате:</h3>
              </Col>
              <Col>
                <h3 className='text-end'>
                  {Intl.NumberFormat(navigator.language, {
                    style: 'currency',
                    currency: 'RUB',
                  }).format(state.total)}
                </h3>
              </Col>
              <Col>
                <NavLink to='/cart'>
                  <Button size='lg' style={{ width: '100%' }}>
                    Оформить заказ:
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Card.Footer>
        </Collapse>
      </Card>
    </>
  );
}
