import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Analysis from '../pages/Analysis';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Analysis></Analysis>,
        },
    ]
    },

  ]);
  
  export default router;