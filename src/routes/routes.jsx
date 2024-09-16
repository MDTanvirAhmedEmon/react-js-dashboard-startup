import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Analytics from '../pages/Analytics';
import Competition from '../pages/Competition';
import Moderation from '../pages/Moderation';
import PaymentManagement from '../pages/PaymentManagement';
import UserManagement from '../pages/UserManagement';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Analytics></Analytics>,
      },
      {
        path: "/competition",
        element: <Competition></Competition>,
      },
      {
        path: "/moderation",
        element: <Moderation></Moderation>,
      },
      {
        path: "/payment-management",
        element: <PaymentManagement></PaymentManagement>,
      },
      {
        path: "/user-management",
        element: <UserManagement></UserManagement>,
      },
    ]
  },

]);

export default router;