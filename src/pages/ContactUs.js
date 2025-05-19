import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Show loader
    try {
      const backendurl = process.env.REACT_APP_BACKEND_URL;
      const res = await axios.post(`${backendurl}/api/email`, formData);
      setResponse(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setResponse('Failed to send email.');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fdfaf6', color: '#333' }}>
      <Header />
      <header style={{
        backgroundColor: '#007B5E',
        color: 'white',
        padding: '30px 0',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '10px' }}>Contact Us</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          We'd love to hear from you. Reach out with questions, suggestions or just to say hello!
        </p>
      </header>

      <div style={{ maxWidth: '1000px', margin: 'auto', padding: '20px' }}>
        <section style={{ margin: '40px 0', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Form Column */}
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <h2 style={{ marginBottom: '20px', color: '#007B5E' }}>Send a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '12px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '16px'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '12px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '16px'
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  padding: '12px',
                  minHeight: '120px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
              />
              {/* Loader Animation */}
              {loading && (
                <div style={styles.loader}></div>
              )}
              <button
                type="submit"
                style={{
                  padding: '12px',
                  backgroundColor: '#007B5E',
                  color: 'white',
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
              >
                Send
              </button>

              <p style={{ marginTop: '15px', fontWeight: 'bold', color: response.includes('success') ? '#28a745' : 'red' }}>
                {response}
              </p>
            </form>
          </div>

          {/* Info Column */}
          <div style={{
            flex: '1 1 400px',
            backgroundColor: '#f1f1f1',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            lineHeight: '1.8',
            fontSize: '16px'
          }}>
            <h3 style={{ marginBottom: '15px', color: '#007B5E' }}>Contact Info</h3>
            <p><strong>Email:</strong> support@fyerapps.com</p>
            <p><strong>Phone:</strong> +91 9030627721</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

// Styles for the loader
const styles = {
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '4px solid #f3f3f3', /* Light gray */
    borderTop: '4px solid #007B5E', /* Green color */
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    animation: 'spin 1s linear infinite',
    zIndex: 10, /* Ensures the loader is on top */
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  }
};

export default ContactUs;
