import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, NavBar } from '../components';
import { reducer } from '../reducer';
import { State } from '../types';

export function App() {
  const initialState: State = { country: '', time: '', type: '', total: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation();

  return (
    <>
      <NavBar />
      <div
        id='transition'
        className={navigation.state === 'loading' ? 'loading' : ''}
      />
      <Container fluid='lg' className='mt-4' style={{ minHeight: '77.5vh' }}>
        <Outlet context={{ state, dispatch }} />
      </Container>
      <Footer />
    </>
  );
}
