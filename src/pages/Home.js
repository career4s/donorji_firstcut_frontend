// src/pages/Home.js
import React, {useState} from 'react';
import LogoutButton from '../components/LogoutButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [search, setSearch] = useState('');
  
  const iconButtons = [
    { label: 'My Transactions', icon: '💳' },
    { label: 'My Donations', icon: '🎁' },
    { label: 'My Campaigns', icon: '📢' },
    { label: 'My Profile', icon: '👤' },
    { label: 'Payment Settings', icon: '⚙️' },
  ];
  return (
    <div>
       <Header/>
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
     
      {/* Section: Icon Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {iconButtons.map((btn, i) => (
          <div key={i} style={{ 
            flex: '1 1 18%', 
            backgroundColor: '#f8f9fa', 
            margin: '0.5rem', 
            padding: '1rem', 
            textAlign: 'center', 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ fontSize: '2rem' }}>{btn.icon}</div>
            <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{btn.label}</div>
          </div>
        ))}
      </div>

      {/* Section: Search Box */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Recipient Name / Donor Name / Area"
          style={{
            width: '60%',
            padding: '12px 16px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />
      </div>

      {/* Section: Paginated List Placeholder */}
      <div style={{
        minHeight: '200px',
        padding: '1rem',
        backgroundColor: '#f1f1f1',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Paginated List of Campaigns / Transactions</h3>
        <p style={{ color: '#777' }}>Results will appear here...</p>
      </div>

      {/* Section: Top Donors & Top Recipients */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        
        <div style={{ flex: '1', background: '#fff3cd', padding: '1rem', borderRadius: '8px' }}>
          <h4>🏅 Top Donors in Your Area</h4>
          <ul>
            <li>John Doe - ₹10,000</li>
            <li>Jane Smith - ₹8,500</li>
            <li>Arun Mehta - ₹7,200</li>
          </ul>
        </div>

        <div style={{ flex: '1', background: '#d1ecf1', padding: '1rem', borderRadius: '8px' }}>
          <h4>📦 Top Recipients in Your Area</h4>
          <ul>
            <li>Asha Trust - ₹12,000 raised</li>
            <li>Sanjeevani NGO - ₹9,300 raised</li>
            <li>Children’s Aid - ₹8,100 raised</li>
          </ul>
        </div>

      </div>
     
    </div> 
    <Footer/></div>
  );
}

export default Home;
