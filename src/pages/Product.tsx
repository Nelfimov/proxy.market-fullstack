import { collection, getDocs } from 'firebase/firestore';
import { Dispatch, useEffect, useState } from 'react';
import { Button, Card, Col, Collapse, Row, Placeholder } from 'react-bootstrap';
import { NavLink, useOutletContext } from 'react-router-dom';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, 'priceList'))
      .then((res) => {
        priceListDispatch({ type: 'INIT', payload: res });
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Купить прокси:</h1>
      <Card>
        <Card.Header>
          <h3>Онлайн калькулятор</h3>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <>
              <Placeholder as={Row} animation='wave'>
                <Placeholder as={Col} className='m-3' xs={2}></Placeholder>
                <Placeholder as={Col} className='m-3'></Placeholder>
                <Placeholder as={Col} className='m-3'></Placeholder>
              </Placeholder>
              <Placeholder as={Row} animation='wave' style={{ height: '50px' }}>
                <Placeholder as={Col} className='m-3'></Placeholder>
                <Placeholder as={Col} className='m-3'></Placeholder>
                <Placeholder as={Col} className='m-3'></Placeholder>
              </Placeholder>
            </>
          ) : (
            <CalculatorForm
              action={cartDispatch}
              state={cartState}
              priceList={priceListState}
            />
          )}
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
                {loading ? (
                  <Placeholder.Button
                    xs={12}
                    animation='wave'
                    style={{ height: '35px' }}
                  />
                ) : (
                  <NavLink
                    to={cartState.time === '' ? 'javascript:void(0)' : '/cart'}
                  >
                    <Button
                      size='lg'
                      style={{ width: '100%' }}
                      disabled={cartState.time === ''}
                    >
                      Оформить заказ:
                    </Button>
                  </NavLink>
                )}
              </Col>
            </Row>
          </Card.Footer>
        </Collapse>
      </Card>
    </>
  );
}
