import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { CalculatorForm } from '../components';
import { reducer } from '../reducer';
import { State } from '../types';

function App() {
  const initialState: State = { country: '', time: '', type: '' };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <Container>
        <CalculatorForm />
      </Container>
    </div>
  );
}

export default App;
