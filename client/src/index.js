import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Signin from './pages/authentication/signIn/Signin';
import Signup from './pages/authentication/signUp/Signup';
import ForgetPassword from './pages/authentication/forgetPassword/ForgetPassword';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import AcceptApproval from './pages/admin/acceptApproval/AcceptApproval';
import ReviewTickets from './pages/admin/reviewTickets/ReviewTickets';
import FundMonitorAdmin from './pages/admin/fundMonitor/FundMonitor';
import CreatePosts from './pages/admin/createPosts/CreatePosts';
import AddProducts from './pages/admin/addProducts/AddProducts';
import AddServiceProviders from './pages/admin/addServiceProviders/AddServiceProviders';
import RaiseTickets from './pages/user/raiseTickets/RaiseTickets';
import FundMonitorUser from './pages/user/fundMonitor/FundMonitor';
import ViewPosts from './pages/user/viewPosts/ViewPosts';
import BuyProducts from './pages/user/buyProducts/BuyProducts';
import ViewServiceProviders from './pages/user/viewServiceProviders/ViewServiceProviders';
import './index.scss';

//implementing lazy loading
const Home = lazy(() => wait(5000).then(() => import('./components/home/Home')));
const Admin = lazy(() => wait(5000).then(() => import('./pages/admin/Admin')));
const User = lazy(() => wait(5000).then(() => import('./pages/user/User')));

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
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/forgetpassword',
        element: <ForgetPassword />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      { path: '/admin/acceptApproval', element: <AcceptApproval /> },
      { path: '/admin/reviewTickets', element: <ReviewTickets /> },
      { path: '/admin/fundMonitorAdmin', element: <FundMonitorAdmin /> },
      { path: '/admin/createPosts', element: <CreatePosts /> },
      { path: '/admin/addProducts', element: <AddProducts /> },
      { path: '/admin/addServiceProviders', element: <AddServiceProviders /> },
      {
        path: '/user',
        element: <User />,
      },
      { path: '/user/raiseTickets', element: <RaiseTickets /> },
      { path: '/user/fundMonitorUser', element: <FundMonitorUser /> },
      { path: '/user/viewPosts', element: <ViewPosts /> },
      { path: '/user/buyProducts', element: <BuyProducts /> },
      { path: '/user/viewServiceProviders', element: <ViewServiceProviders /> },
      {
        path: '/pagenotfound',
        element: <PageNotFound />,
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
