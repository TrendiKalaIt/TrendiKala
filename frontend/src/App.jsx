// src/App.jsx
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import AuthLayout from './components/Layouts/AuthLayout';
import HomeLayout from './components/Layouts/HomeLayout';

import ScrollToTop from './components/ScrollToTop';



import Home from './pages/Home';
import About from './pages/About';
import AllProducts from './pages/AllProducts';
import ProductDetailsPage from './components/productDetails/ProductDetailsPage';
import CartPage from './pages/CartPage';
import Wishlist from './pages/Wishlist';
import CheckoutDetails from './pages/Checkout';
import Thankyou from './pages/ThankyouPage';
import Manufacturing from './pages/Manufacturing'
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import OTPVerification from './pages/OTPVerification';
import SearchResults  from './pages/SearchResults'




// Redux imports
import { Provider } from 'react-redux'; // Import Provider
import store from './utility/store';


function App() {
  return (
    <>
      <Toaster position="top-center" />
      {/* Wrap your entire application with the Redux Provider */}
      <Provider store={store}>
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
              <Route path="/search" element={<SearchResults />} />
              {/* add more routes here */}
            </Route>

            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<SignIn />} /> {/* Ensure this path matches your Navbar's navigate('/login') */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/verify-otp" element={<OTPVerification />} />
            </Route>

            <Route path="/error" element={<ErrorPage />} />

         

          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;