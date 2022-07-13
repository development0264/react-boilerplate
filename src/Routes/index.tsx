/**
 *
 * The Routing of whole page will manage from here.
 *
 */

import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import LayoutContainer from '../LayoutContainer';
import Dashboard from '../Views/Dashboard';
import Login from '../Views/Login';
import NotFound from '../Views/NotFound';

const AppRoutes: FC = () => {
  const Routes = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <LayoutContainer />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return Routes;
};

export default AppRoutes;
