import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BeaDonor = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      title: '1. Sign Up / Sign In',
      description: 'Create an account or log in to get started on your journey of giving.',
      icon: '📝',
    },
    {
      title: '2. Upload Profile and Payment Info',
      description: 'Securely add your basic details and payment method to make donating easy.',
      icon: '💳',
    },
    {
      title: '3. Choose Your Case',
      description: 'Browse and select a cause that moves you—education, health, disaster relief, and more.',
      icon: '🎯',
    },
    {
      title: '4. Donate',
      description: 'Contribute any amount. Every rupee makes a difference.',
      icon: '🤝',
    },
    {
      title: '5. Be a Hero',
      description: 'Get updates, share your impact, and inspire others to give.',
      icon: '🌟',
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
      background: '#f7f7f7',
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
      fontSize: '20px',
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
      backgroundColor: '#3b82f6',
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
      backgroundColor: '#3b82f6',
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
        <h1>Become a Hero in 5 Simple Steps</h1>
        <p style={styles.introText}>
          At Donorji, every donor is a changemaker. Here's your inspiring roadmap to making a real difference.
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
            Start Your Journey
          </button>
        </div>

        {modalOpen && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <h2 style={styles.modalTitle}>Hang Tight! 🚀</h2>
              <p style={styles.modalMessage}>We're on our way to launch!</p>
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

export default BeaDonor;
