import './App.css';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Home } from './components/Home';
import ProductDetail from './components/Productdetails';
// import Login from './components/Login_new';
// import Login1 from './components/Login1';
import { AuthProvider } from './auth/Authenticate';
import Login1 from './components/Login1';
import Cart from './components/Cart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer.js';
import { Navigate } from 'react-router-dom';




function App() {
  return (
    <>
    
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>
      <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="login" element={<Login1 />} />
            <Route path="/cart" element={<Cart />} />
            {/* Redirect any unknown path to the home page */}
            <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </BrowserRouter>
      
    </>

  );
}

export default App;
