import { useRoutes } from 'react-router-dom';
import { Layout } from '../layout';
import { Home } from '../pages';

export function RouterElement() {
  const elements = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/vite-deploy-demo',
          element: <Home />,
        },
      ],
    },
  ]);

  return <>{elements}</>;
}
