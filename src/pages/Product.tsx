import { collection, getDocs } from 'firebase/firestore';
import { Dispatch, useEffect } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { CalculatorForm } from '../components';
import { db } from '../firebase';
import {
  ActionCart,
  CartState,
  ActionPriceList,
  PriceListState,
} from '../types';

export function Product() {
  const { cartState, cartDispatch, priceListState, priceListDispatch } =
    useOutletContext<{
      cartState: CartState;
      cartDispatch: Dispatch<ActionCart>;
      priceListState: PriceListState;
      priceListDispatch: Dispatch<ActionPriceList>;
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
          <CalculatorForm action={cartDispatch} state={cartState} />
        </Card.Body>
        <Collapse in={cartState.total > 0}>
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
                  }).format(cartState.total)}
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
