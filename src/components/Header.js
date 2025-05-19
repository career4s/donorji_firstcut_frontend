import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal'; // Adjust path if needed
import LogoutButton from './LogoutButton';

export default function Header() {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const navLinks = [
    // { label: 'Home', path: isAuthenticated ? '/home' : '/' },
    { label: 'Home', path: '/' },
    { label: 'Be a Donor', path: '/beadonor' },
    { label: 'Raise Funds', path: '/raisefunds' }
  ];

  const username = 'John Doe'; // Replace with real username from context or backend

  return (
    <>
      <nav style={{
        backgroundColor: 'cornflowerblue',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        flexWrap: 'wrap'
      }}>
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'color 0.3s'
              }}
              onMouseOver={e => (e.target.style.color = '#FFD700')}
              onMouseOut={e => (e.target.style.color = 'white')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center Title */}
        <div style={{
          fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#FFD700',
          textShadow: '1px 1px 2px #333'
        }}>
          Donorji
        </div>

        {/* Auth/User Section */}
        {/* <div>
          {!isAuthenticated ? (
            <button
              onClick={() => setShowAuthModal(true)}
              style={{
                backgroundColor: 'white',
                color: 'red',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Sign Up / Sign In
            </button>
          ) : (
            <span style={{ fontWeight: 'bold' }}>Hello, {username} <LogoutButton/> </span>
          )}
        </div> */}
      </nav>

      {/* Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
