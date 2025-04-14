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
import Categories from './components/categories/Categories';
import CategoriesFood from './components/categories/categoriesFood/CategoriesFood';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: '/foods',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        Component: Foods
      },
      {
        path: 'categories',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        Component: Categories
      },
      {
        path: 'categories/:categoryName',
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`),
        Component: CategoriesFood
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: '/buy',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c'),
        Component: Buy
      },
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
