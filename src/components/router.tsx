import { createBrowserRouter } from 'react-router-dom';
import { App, Home } from '../pages';

export const router = createBrowserRouter(
  [
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
          lazy: () => import('../pages/Product'),
        },
        {
          path: '/contacts',
          lazy: () => import('../pages/Contacts'),
        },
        {
          path: '/cart',
          lazy: () => import('../pages/Cart'),
        },
      ],
    },
  ],
  { basename: '/proxy.market-fullstack/' }
);
