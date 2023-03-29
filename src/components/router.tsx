import { createBrowserRouter } from 'react-router-dom';
import { About, App, Product } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/buy-proxie',
        element: <Product />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
