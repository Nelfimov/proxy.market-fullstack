import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { CalculatorForm } from '../components';
import { reducer } from '../reducer';
import { State } from '../types';

function App() {
  const initialState: State = { country: '', time: '', type: '', total: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <Container>
        <CalculatorForm action={dispatch} />
        <pre>{JSON.stringify(state, undefined, 2)}</pre>
      </Container>
    </div>
  );
}

export default App;
