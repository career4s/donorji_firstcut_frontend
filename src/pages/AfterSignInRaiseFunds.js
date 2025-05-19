import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AfterSigninRaiseFunds = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fundraiser Submitted:', formData);
    alert('Fundraiser created successfully (simulated)!');
    // Send to backend or save in state management here
  };

  const styles = {
    container: {
      padding: '40px',
      maxWidth: '700px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
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
    quote: {
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#888',
      marginBottom: '40px',
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
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      width: '100%',
    },
    banner: {
      backgroundColor: '#ecfdf5',
      padding: '30px',
      borderRadius: '10px',
      marginBottom: '30px',
      textAlign: 'center',
      border: '1px solid #d1fae5',
    },
    bannerText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#065f46',
    },
  };

  return (
    <div>
      <Header/>
    
    <div style={styles.container}>
      <div style={styles.banner}>
        <p style={styles.bannerText}>
          “One small act of kindness can create endless ripples.”
        </p>
      </div>

      <h1 style={styles.heading}>Raise Funds for a Cause You Believe In</h1>
      <p style={styles.subheading}>
        Whether it’s for medical help, education, or a dream project—share your story and let the world help you make it real.
      </p>

      <p style={styles.quote}>
        “Fundraising isn’t about money—it’s about impact. Start yours today.”
      </p>

      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Fundraiser Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Goal Amount (INR)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select Category</option>
            <option value="Homeless">Homeless</option>
            <option value="Religious">Religious</option>
            <option value="Medical">Medical</option>
            <option value="Education">Education</option>
            <option value="Disaster Relief">Disaster Relief</option>
            <option value="Animal Welfare">Animal Welfare</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            style={styles.input}
            accept="image/*"
          />
        </div>

        <button type="submit" style={styles.button}>
          Start Fundraiser Journey
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default AfterSigninRaiseFunds;