import './App.css';
import { Navbar } from './components/Navbar';
import { Counter } from './components/Counter';
import { Products } from './components/Products';
import { HashRouter, Routes , Route} from 'react-router-dom';
import { Home } from './components/Home';
import ProductDetail from './components/Productdetails';
// import Login from './components/Login_new';
// import Login1 from './components/Login1';
import { AuthProvider } from './auth/Authenticate';
import Login1 from './components/Login1';
import Cart from './components/Cart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  return (
    <>
    
    <HashRouter>
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path=''  element = {<Home/>}/>
        <Route path='products' element = { <Products/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path='counter' element = { <Counter/>}/>
        <Route path='login' element = { <Login1/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </AuthProvider>
    </HashRouter>
      
    </>

  );
}

export default App;
