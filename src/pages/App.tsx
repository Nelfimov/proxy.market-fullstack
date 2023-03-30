import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, NavBar } from '../components';
import { cartReducer, priceListReducer } from '../reducer';
import { CartState } from '../types';

export function App() {
  const initialState: CartState = { country: '', time: '', type: '', total: 0 };
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const [priceListState, priceListDispatch] = useReducer(priceListReducer, {
    country: {},
    time: {},
    type: {},
  });
  const navigation = useNavigation();

  return (
    <>
      <NavBar />
      <div
        id='transition'
        className={navigation.state === 'loading' ? 'loading' : ''}
      />
      <Container fluid='lg' className='mt-4' style={{ minHeight: '77.5vh' }}>
        <Outlet
          context={{
            cartState,
            cartDispatch,
            priceListState,
            priceListDispatch,
          }}
        />
      </Container>
      <Footer />
    </>
  );
}
