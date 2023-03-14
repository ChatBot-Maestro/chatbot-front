import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/organisms/Dashboard/Dashboard.js';
import LogIn from './components/organisms/LogIn/LogIn';
import reportWebVitals from './reportWebVitals';

// FIXME: this is a hack to get the theme to work, but it doesn't work :P
const theme = createTheme({
  palette: {
    secondary: {
      main: '#f44336',
    },
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}/>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
