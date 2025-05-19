import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DownloadApp = () => {
  return (
    <div> <Header/>
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fdf6f0', minHeight: '100vh', padding: '2rem' }}>
     
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: '#333' }}>Download the Donerji App</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Access fundraising, donations, and updates from your mobile — anytime, anywhere.
        </p>
      </header>

      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        <div style={{ flex: '1 1 350px', textAlign: 'center' }}>
          <img
            src="https://source.unsplash.com/300x600/?mobile,app"
            alt="App preview"
            style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          />
        </div>

        <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
          <h2 style={{ color: '#444' }}>Why use our App?</h2>
          <ul style={{ color: '#555', fontSize: '1rem', paddingLeft: '1rem', lineHeight: '1.8' }}>
            <li>Track your donations and campaigns easily</li>
            <li>Instant notifications on fund updates</li>
            <li>One-click donation with secure payments</li>
            <li>Seamless donor and beneficiary experience</li>
          </ul>

          <a
            href="https://play.google.com/store/apps/details?id=org.milaap.app" // replace with actual app link
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              backgroundColor: '#007B5E',
              color: '#fff',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Download on Google Play
          </a>
        </div>
      </section>
      
    </div>
    <Footer/>
    </div>
  );
};

export default DownloadApp;
