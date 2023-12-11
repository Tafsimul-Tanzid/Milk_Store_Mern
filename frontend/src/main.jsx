import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home";
import CreateOrder from "./pages/createOrder";
import ShowOrder from "./pages/ShowOrder";
import EditOrder from "./pages/EditOrder";
import DeleteOrder from "./pages/DeleteOrder";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/orders/create",
    element: <CreateOrder/>,
  },
  {
    path: "/orders/edit/:id",
    element: <EditOrder/>,
  }, 
  {
    path: "/orders/delete/:id",
    element: <DeleteOrder/>,
  },
  {
    path: "/orders/details/:id",
    element: <ShowOrder/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
)
