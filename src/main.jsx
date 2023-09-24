import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import {Dashboard, Contact,User, About } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: < ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "users",
        element: <User/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
)
