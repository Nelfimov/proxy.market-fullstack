import { createBrowserRouter } from 'react-router-dom';
import { About, App } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
