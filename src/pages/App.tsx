import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../components';
import { reducer } from '../reducer';
import { State } from '../types';

export function App() {
  const initialState: State = { country: '', time: '', type: '', total: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <NavBar />
      <Container className='mt-4'>
        <Outlet context={[state, dispatch]} />
      </Container>
      <Footer />
    </>
  );
}
