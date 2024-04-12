import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.scss';

//implementing lazy loading
const Home = lazy(() => wait(1000).then(() => import('./components/home/Home')));
const Admin = lazy(() => wait(1000).then(() => import('./pages/admin/Admin')));
const User = lazy(() => wait(1000).then(() => import('./pages/user/User')));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: 'Something went wrong!',
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
])

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
