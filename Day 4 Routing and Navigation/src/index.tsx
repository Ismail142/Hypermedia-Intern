import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';




const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/about',
    element: <About/>
  },
  {
    path:'/contact',
    element: <Contact/>
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
