import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import SuccessPage from './components/SuccessPage';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: < App />,
    },
    
    {
      path: "success",
      element: < SuccessPage />,
    },
  ]);
  


ReactDOM.render(<RouterProvider router={router} />,document.getElementById("root"))