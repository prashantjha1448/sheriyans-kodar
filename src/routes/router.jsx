import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ApplyPage from '../pages/ApplyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/apply',
    element: <ApplyPage />,
  },
]);

export default router;
