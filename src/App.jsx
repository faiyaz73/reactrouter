import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Registor from './components/pages/Registor';
import Contact from './components/pages/Contact';
import MainLayout from './components/comman/MainLayout';
import Product from './components/pages/Product';
import ProductDetails from './components/pages/productDetails';
import Error404 from './components/pages/Error404';
import ProductAPI from './components/pages/ProductAPI';

function App() {

  return (
    <>
   <div className='bg-neutral-primary w-full'>

     <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registor' element={<Registor />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product-api' element={<ProductAPI />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<Error404 />} />
        </Route>
       
      </Routes>
     </BrowserRouter>
   
   </div>
   </>
    );
}

export default App;
