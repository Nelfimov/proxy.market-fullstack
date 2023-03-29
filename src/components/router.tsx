import { createBrowserRouter } from 'react-router-dom';
import { About, App, Home, Product } from '../pages';

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
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
