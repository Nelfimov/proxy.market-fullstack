import { createBrowserRouter } from 'react-router-dom';
import { App, Home, Product, Contacts } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/buy-proxie',
        element: <Product />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
]);
