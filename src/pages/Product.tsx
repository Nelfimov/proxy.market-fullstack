import { Dispatch } from 'react';
import { Card } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { CalculatorForm } from '../components';
import { Action, State } from '../types';

export function Product() {
  // @ts-expect-error: ignore
  const [state, dispatch] = useOutletContext<{
    state: State;
    dispatch: Dispatch<Action>;
  }>();

  return (
    <Card>
      <Card.Header>
        <h3>Онлайн калькулятор</h3>
      </Card.Header>
      <Card.Body>
        <h1>Купить прокси:</h1>
        <CalculatorForm action={dispatch} state={state} />
        <pre>{JSON.stringify(state, undefined, 2)}</pre>
      </Card.Body>
    </Card>
  );
}
