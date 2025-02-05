import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';



let query =new QueryClient();

let x = createBrowserRouter([
  {path:""   , element:<Layout/>,children:[
    {  index:true  , element:<ProtectedRoute><Home/></ProtectedRoute>},
    {  path:"Categories"  , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {  path:"Brands"  , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {  path:"Cart"  , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {  path:"Products"  , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {  path:"ProductDetails/:id/:category"  , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {  path:"Login"  , element:<Login/>},
    {  path:"Register"  , element:<Register/>},
    {  path:"*"  , element:<NotFound/>},
  ]},

])

function App() {
  const [count, setCount] = useState(0)

  return<QueryClientProvider client={query}> <UserContextProvider>
  <CounterContextProvider>
    <CartContextProvider>
    <RouterProvider router={x}></RouterProvider>
    <Toaster/>
    </CartContextProvider>
    <ReactQueryDevtools/>
  
 </CounterContextProvider>
  </UserContextProvider>
  </QueryClientProvider>
}
export default App
