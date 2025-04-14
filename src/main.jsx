import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Root from './components/root/Root';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import Buy from './components/buy/Buy';
import Foods from './components/foods/Foods';
import Contact from './components/contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home },
      {path: 'buy', Component: Buy},
      {
        path: 'foods',
        Component: Foods
      },
      {
        path: 'contact',
        Component: Contact
      }
      
    ]
  },
  {
    path: '*',
    Component: NotFound 
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
