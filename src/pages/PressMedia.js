import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const PressMedia = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fdfaf6', color: '#333' }}>
      <Header/>
      <header style={{ backgroundColor: '#005a87', color: 'white', padding: '30px 0', textAlign: 'center' }}>
        <h1>Press & Media</h1>
        <p>Read our story, explore highlights, and access media resources</p>
      </header>

      <div style={{ maxWidth: '1000px', margin: 'auto', padding: '20px' }}>
        <section style={{ marginBottom: '50px' }}>
          <h2>In the News</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus a purus bibendum tempus.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '20px' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: '1 1 300px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                <img
                  src={`https://source.unsplash.com/400x250/?media,news,${i}`}
                  alt="media coverage"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div style={{ padding: '15px' }}>
                  <h3>Press Headline {i}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus urna ut magna...</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2>Press Releases</h2>
          <ul>
            <li>COMING SOON</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2>Media Kit</h2>
          <p>You can use the following resources for coverage or features:</p>
          <ul>
            <li><a href="#!" style={{ color: '#005a87', textDecoration: 'underline' }}>Download Logo Pack (PNG, SVG)</a></li>
            <li><a href="#!" style={{ color: '#005a87', textDecoration: 'underline' }}>Company Fact Sheet (PDF)</a></li>
            <li><a href="#!" style={{ color: '#005a87', textDecoration: 'underline' }}>Press Contact Info</a></li>
          </ul>
        </section>

        <section>
          <h2>Need to talk?</h2>
          <p>We're happy to provide quotes, interviews, and insights. For press inquiries, contact:</p>
          <p><strong>Email:</strong> support@fyerapps.com<br />
             <strong>Phone:</strong> +91 9849500223</p>
          <img
            src="https://source.unsplash.com/featured/?press,interview"
            alt="Press contact"
            style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }}
          />
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default PressMedia;
