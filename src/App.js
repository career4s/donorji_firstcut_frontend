// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Signin from './pages/Signin';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/LandingPage';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Payments from './pages/Payments';
import ThankYou from './pages/ThankYou';
import TransactionHistory from './pages/TransactionHistory';
import PrivateRoute from './routes/PrivateRoute';
import BeaDonor from './pages/BeaDonor';
import AfterSigninBeaDonor from './pages/AfterSigninBeaDonor';
import RaiseFunds from './pages/RaiseFunds';
import AfterSigninRaiseFunds from './pages/AfterSignInRaiseFunds';
import AboutUs from './pages/AboutUs';
import PressMedia from './pages/PressMedia';
import DownloadApp from './pages/DownloadApp';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/beadonor" element={<BeaDonor />} />
          <Route path="/beadonorsuccess" element={<AfterSigninBeaDonor />} />
          <Route path="/raisefunds" element={<RaiseFunds />} />
          <Route path="/raisefundssuccess" element={<AfterSigninRaiseFunds />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/press" element={<PressMedia/>} />
          <Route path="/downloadapp" element={<DownloadApp/>} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          {/* Protected Routes */}
          {/* <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute><SearchResults /></PrivateRoute>} />
          <Route path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>} />
          <Route path="/thankyou" element={<PrivateRoute><ThankYou /></PrivateRoute>} />
          <Route path="/transactions" element={<PrivateRoute><TransactionHistory /></PrivateRoute>} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
