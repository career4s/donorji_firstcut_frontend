import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RaiseFunds = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      title: '1. Create an Account',
      description: 'Sign up to start your journey and access your fundraiser dashboard.',
      icon: '👤',
    },
    {
      title: '2. Share Your Story',
      description: 'Describe your cause with honesty and heart. People connect with real stories.',
      icon: '📖',
    },
    {
      title: '3. Set a Goal & Category',
      description: 'Decide how much you want to raise and choose a category that fits your need.',
      icon: '🎯',
    },
    {
      title: '4. Add an Image or Video',
      description: 'Visuals build trust and help your story resonate.',
      icon: '📸',
    },
    {
      title: '5. Launch & Share',
      description: 'Go live and share your campaign with friends, family, and social media.',
      icon: '🚀',
    },
    {
      title: '6. Receive Support',
      description: 'Watch the kindness of strangers and loved ones lift your story.',
      icon: '💖',
    },
  ];

  const styles = {
    container: {
      padding: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    banner: {
      backgroundColor: '#fef3c7',
      padding: '30px',
      borderRadius: '12px',
      marginBottom: '30px',
      color: '#92400e',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    introText: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '30px',
    },
    stepsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    stepCard: {
      background: '#f9fafb',
      padding: '20px',
      width: '250px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    icon: {
      fontSize: '40px',
      marginBottom: '10px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      color: '#666',
    },
    ctaButton: {
      marginTop: '40px',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    modal: {
      background: '#fff',
      padding: '30px',
      borderRadius: '12px',
      maxWidth: '400px',
      textAlign: 'center',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    },
    modalTitle: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    modalMessage: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '20px',
    },
    closeButton: {
      padding: '10px 20px',
      backgroundColor: '#10b981',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
    },
  };

  return (
    <div>
      <Header />

      <div style={styles.container}>
        <div style={styles.banner}>
          “Your story has the power to inspire. Start your fundraiser and make change happen.”
        </div>

        <h1>Raise Funds in 6 Simple Steps</h1>
        <p style={styles.introText}>
          Whether it’s a medical emergency, an education dream, or a cause you care about—
          we’ll help you get the support you need.
        </p>

        <div style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepCard}>
              <div style={styles.icon}>{step.icon}</div>
              <h2 style={styles.title}>{step.title}</h2>
              <p style={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>

        <div style={styles.ctaButton}>
          <button
            style={styles.button}
            onClick={() => setModalOpen(true)}
          >
            Start Your Fundraiser Journey
          </button>
        </div>

        {modalOpen && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <h2 style={styles.modalTitle}>Hang Tight! 💡</h2>
              <p style={styles.modalMessage}>We’re almost ready to help you raise hope and funds!</p>
              <button
                style={styles.closeButton}
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RaiseFunds;
