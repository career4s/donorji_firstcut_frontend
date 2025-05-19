import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { label: 'About Us', path: '/about' },
    // { label: 'Press & Media', path: '/press' },
    { label: 'Contact Us', path: '/contactus' },
    // { label: 'Download the App', path: '/downloadapp' }
  ];

  return (
    <div>
      <footer
        style={{
          backgroundColor: 'white',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-around',
          border: '1px solid black', // 🔲 Black border added
          paddingBottom: '5rem',
          paddingTop: '3rem'
        }}
      >
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            style={{
              color: '#000',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s',
            }}
            onMouseOver={e => (e.target.style.color = '#FFA500')}
            onMouseOut={e => (e.target.style.color = '#000')}
          >
            {link.label}
          </Link>
        ))}
      </footer>
    </div>
  );
}
