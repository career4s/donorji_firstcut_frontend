import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
   
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fdfaf6', color: '#333' }}>
         <Header/>
      <header style={{ backgroundColor: '#f28c28', color: 'white', padding: '30px 0', textAlign: 'center' }}>
        <h1>About Us</h1>
        <p>Empowering people to make a difference — one donation at a time.</p>
      </header>

      <div style={{ maxWidth: '1000px', margin: 'auto', padding: '20px' }}>
        <section style={{ margin: '40px 0' }}>
          <h2>Our Mission</h2>
          <p>
            At Donorji, our mission is to democratize giving by connecting compassionate individuals with meaningful
             causes through transparent, accessible, and technology-driven solutions. We aim to empower donors, amplify 
            impact for grassroots organizations, and build a culture of generosity that transforms lives and communities.</p>
        </section>

        <section style={{ margin: '40px 0' }}>
          <h2>How We Started</h2>
          <p>Donorji was born out of a simple yet powerful idea: to make giving easier, more impactful, and more accessible 
            for everyone. Our founders, inspired by the transformative power of small acts of kindness, recognized the need 
            for a platform that could bridge the gap between individuals who wanted to donate and the causes that needed 
            support. Frustrated by the complexities of traditional giving methods and the lack of transparency, we set out
             to build Donorji—an intuitive, secure platform where donors can connect directly with trusted causes. From our 
             humble beginnings, we’ve grown into a community of passionate individuals and organizations, united by the belief
              that every contribution, no matter how small, has the power to make a difference. 
            Today, we continue to innovate and evolve, ensuring that giving back is as easy and impactful as possible.</p>
          {/* <img
            src="https://source.unsplash.com/featured/?teamwork,nonprofit"
            alt="Our journey"
            style={{ maxWidth: '100%', borderRadius: '5px', marginTop: '20px' }}
          /> */}
        </section>

        {/* <section style={{ margin: '40px 0' }}>
          <h2>Our Impact</h2>
          <p>Over the past 5 years, we've helped connect over 1 million donors with causes across healthcare, education, and community support.</p>
          <img
            src="https://source.unsplash.com/featured/?community,charity"
            alt="Impact"
            style={{ maxWidth: '100%', borderRadius: '5px', marginTop: '20px' }}
          />
        </section> */}

        <section style={{ margin: '40px 0' }}>
          <h2>Meet Our Team</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {['person1', 'person2'].map((person, idx) => (
              <div key={idx} style={{
                flex: '1 1 200px',
                background: '#fff',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <img
                  src={`https://source.unsplash.com/100x100/?${person}`}
                  alt="Team"
                  style={{ borderRadius: '50%' }}
                />
                <h3>{['Akshar Samala', 'Rajesh Kataru'][idx]}</h3>
                <p>{['Founder & CEO', 'Head of Operations'][idx]}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ margin: '40px 0' }}>
          <h2>Join Us</h2>
          <p>If you believe in making an impact and want to be part of our journey, get in touch.</p>
          
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
