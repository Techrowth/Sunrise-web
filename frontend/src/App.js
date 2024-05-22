
import './assets/css/style.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import BeforeHeader from './components/BeforeHeader';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import MyCart from './pages/MyCart';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import ContactUs from './pages/ContactUs';
import TrackOrder from './pages/TrackOrder';
import Wishlist from './pages/Wishlist';
import AboutUs from './pages/AboutUs';




function App() {
  return (
    <div className="App">
      <>

      <Router>
      <BeforeHeader />
        <MainHeader />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/product-details" element={<ProductDetails/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<MyCart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/track-order" element={<TrackOrder/>} />
        </Routes>
        <Footer />
      </Router>

      </>
    </div>
  );
}

export default App;
