import '/app.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RightBar from './components/rightBar/RightBar';
import LeftBar from './components/leftBar/leftBar';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { Navigate } from 'react-router-dom';
import './style.scss';

function App() {
  const currentUser = true;

  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div className="theme-dark">
        <NavBar />
        <div className="body" style={{ display: 'flex' }}>
          <LeftBar />
          <div className="body" style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectRoute>
          <Layout />
        </ProtectRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
