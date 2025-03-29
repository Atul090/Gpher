
import { children } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout'
import Categories from './pages/categories';
import Search from './pages/search';
import Favorites from './pages/favorites';
import GifPage from './pages/single-gif';
import Home from './pages/home';

const router = createBrowserRouter([
  { 
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },{
        path: '/:category',
        element: <Categories/>,
      },{
        path: '/search/:query',
        element: <Search/>,
      },{
        path: '/favorites',
        element: <Favorites/>,
      },{
        path: '/:type/:slug',
        element: <GifPage/>,
      },
    ]
  }
])


function App() {

  return (
    <>
    <div>hello world</div>
    <RouterProvider router={router}/>
    </>
  );

}

export default App
