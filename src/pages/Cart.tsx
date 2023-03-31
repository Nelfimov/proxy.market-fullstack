import { Card, Placeholder } from 'react-bootstrap';

export function Component() {
  return (
    <>
      <h1>Корзина</h1>
      <Card>
        <Placeholder as={Card.Title} animation='glow'>
          <Placeholder xs={7} />
        </Placeholder>
        <Placeholder as={Card.Body} animation='glow'>
          <Placeholder className='me-2' xs={8} />
          <Placeholder className='me-2' xs={3} />
          <Placeholder className='me-2' xs={1} />
          <Placeholder className='me-2' xs={2} />
          <Placeholder className='me-2' xs={4} />
          <Placeholder className='me-2' xs={2} />
          <Placeholder className='me-2' xs={1} />
        </Placeholder>
        <Placeholder as={Card.Footer} className='my-2' animation='glow'>
          <Placeholder xs={5} className='me-5' />
          <Placeholder xs={5} />
        </Placeholder>
      </Card>
    </>
  );
}

Component.displayName = 'Cart';
