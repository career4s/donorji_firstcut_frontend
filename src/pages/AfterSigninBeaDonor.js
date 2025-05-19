import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AfterSigninBeaDonor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paymentMethod: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donor Info Submitted:', formData);
    alert('Thank you for joining the donor community! (simulated)');
  };

  const styles = {
    container: {
      padding: '40px',
      maxWidth: '700px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    banner: {
      backgroundColor: '#dbeafe',
      padding: '30px',
      borderRadius: '12px',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#1e3a8a',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '10px',
    },
    subheading: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#555',
      marginBottom: '30px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      height: '100px',
      padding: '10px',
      fontSize: '14px',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      width: '100%',
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <div style={styles.banner}>
          “Giving is not just about making a donation. It’s about making a difference.”
        </div>

        <h1 style={styles.heading}>Become a Donor</h1>
        <p style={styles.subheading}>
          Join our community of everyday heroes. Fill in your donor profile and take your first step toward changing lives.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Preferred Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select</option>
              <option value="Credit Card">Credit Card</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
              <option value="Wallet">Wallet</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Why do you want to donate? (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.button}>
            Join the Donor Community
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AfterSigninBeaDonor;
