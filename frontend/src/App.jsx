// src/App.jsx
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import AuthLayout from './components/Layouts/AuthLayout';
import HomeLayout from './components/Layouts/HomeLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Manufacturing from './pages/Manufacturing';
import AllProducts from './pages/AllProducts';
import ErrorPage from './pages/ErrorPage';
import ProductDetailsPage from './components/productDetails/ProductDetailsPage';
import OTPVerification from './pages/OTPVerification';
import CartPage from './pages/CartPage';
import Wishlist from './pages/Wishlist';
import CheckoutDetails from './pages/Checkout';
import Thankyou from './pages/ThankyouPage';

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/about" element={<About />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<CheckoutDetails />} />
            <Route path="/thankyou" element={<Thankyou />} />


            {/* add more routes here */}
          </Route>

          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify-otp" element={<OTPVerification />} />
          </Route>

          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
