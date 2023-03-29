import { useReducer } from 'react';
import { Card, Container } from 'react-bootstrap';
import { CalculatorForm } from '../components';
import { reducer } from '../reducer';
import { State } from '../types';

function App() {
  const initialState: State = { country: '', time: '', type: '', total: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <Container>
        <h1>Купить прокси:</h1>
        <Card>
          <Card.Header>
            <h3>Онлайн калькулятор</h3>
          </Card.Header>
          <Card.Body>
            <CalculatorForm action={dispatch} state={state} />
          </Card.Body>
        </Card>
        <pre>{JSON.stringify(state, undefined, 2)}</pre>
      </Container>
    </div>
  );
}

export default App;
