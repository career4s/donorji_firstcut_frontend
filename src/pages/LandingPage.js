import React, { useState } from 'react'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

// Import slides
//import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
//import slide3 from '../assets/slide3.png';
import beneficiary1 from '../assets/Beneficiaryslide1.png';
//import beneficiary2 from '../assets/Beneficiaryslide2.png';
import beneficiary3 from '../assets/Beneficiaryslide3.png';

export default function LandingPage() {
 
  const [showAuth, setShowAuth] = useState(false);


  const slides = [slide2, beneficiary1, beneficiary3];

  return (
    <div style={{ backgroundColor: '#FFA500', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <Header/>

      {/* Slideshow (now below the navbar) */}
      <Carousel
        autoPlay
        interval={2500}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover={false}
        swipeable={true}
        emulateTouch
        dynamicHeight={false}
      >
        {slides.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slide-${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Carousel>

      {/* Main Content */}
      <main style={{ flex: '1', padding: '2rem', color: '#fff' }}>
        <h1>Welcome to Donorji</h1>
        <p>Believe in Generosities.</p>
        <p>We will connect with you shortly.</p>
      {/* <button onClick={() => setShowAuth(true)} style={{ padding: '10px 20px', backgroundColor: '#007B5E', color: 'white', border: 'none' }}>
        Sign In / Sign Up
      </button> */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
      </main>

     <Footer/>
    </div>
  );
}
