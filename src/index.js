import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from "./app/store"

//Import organisms
import Dashboard from './components/organisms/Dashboard/Dashboard.js';
import LogIn from './components/organisms/LogIn/LogIn.js';
import RequestManagement from './components/organisms/RequestManagement/requestmanagement.js';
import UsersManagement from './components/organisms/userManagement/UserManagement.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#72C2B7',
    },
    secondary: {
      light: '#0066ff',
      main: '#E0652C',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
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
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/userManagement",
    element: <UsersManagement />,
  },
  {
    path: "/requestManagement",
    element: <RequestManagement />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <Provider Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
