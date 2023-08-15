import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ErrorPage from './pages/ErrorPage';
import NewTransactions from './pages/NewTransactions';
import TransactionDetails from './pages/TransactionDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/transaction/:type",
    element: <NewTransactions />,
  },
  {
    path: "/transaction-details/:id",
    element: <TransactionDetails />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
