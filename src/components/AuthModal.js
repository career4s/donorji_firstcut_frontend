import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    emailOrMobile: '',
    otp: '',
  });

  const toggleMode = () => {
    setIsSignUp(prev => !prev);
    setOtpSent(false);
    setFormData({ name: '', emailOrMobile: '', otp: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendOtp = () => {
    if (!formData.emailOrMobile) {
      alert("Please enter email or mobile");
      return;
    }
    // Mock OTP send
    setOtpSent(true);
    alert("OTP sent to " + formData.emailOrMobile);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Mock validation
    alert(`${isSignUp ? 'Signed Up' : 'Signed In'} as ${formData.emailOrMobile}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        width: '400px', background: '#fff', padding: '30px',
        borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 10, right: 10, border: 'none',
          background: 'transparent', fontSize: '1.2em', cursor: 'pointer'
        }}>&times;</button>

        <h2 style={{ textAlign: 'center' }}>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div style={{ marginBottom: '15px' }}>
              <label>Name</label><br />
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
            </div>
          )}

          <div style={{ marginBottom: '15px' }}>
            <label>Email or Mobile</label><br />
            <input type="text" name="emailOrMobile" value={formData.emailOrMobile} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          </div>

          {!otpSent ? (
            <button type="button" onClick={sendOtp} style={{ width: '100%', padding: '10px', backgroundColor: '#007B5E', color: 'white', border: 'none', cursor: 'pointer' }}>
              Send OTP
            </button>
          ) : (
            <>
              <div style={{ margin: '15px 0' }}>
                <label>Enter OTP</label><br />
                <input type="text" name="otp" value={formData.otp} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007B5E', color: 'white', border: 'none', cursor: 'pointer' }}>
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </>
          )}
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          {isSignUp ? 'Already have an account?' : 'New to us?'}{' '}
          <button onClick={toggleMode} style={{ background: 'none', border: 'none', color: '#007B5E', textDecoration: 'underline', cursor: 'pointer' }}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
