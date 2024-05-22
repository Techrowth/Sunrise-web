import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FbLoginIcon from '../assets/img/icon/login-fb.png';
import GmailLoginIcon from '../assets/img/icon/login-gmail.png';


const formStyle = {
  fontFamily: 'Montserrat, sans-serif',
  borderRadius: '10px',
  background: '#FFF',
  padding: '30px 20px 10px 20px',
  marginTop: '30px',
};

const activeTabStyle = {
  color: '#000000',
  fontWeight: '700',
  backgroundColor: '#fff',
  borderColor: '#fff',
};

const navLinkStyle = {
  color: '#000',
  fontWeight: '500',
  fontSize: '20px',
  textDecoration: 'none',
};

const navItemStyle = {
  margin: '15px 20px',
};

const inputStyle = {
  height: '4.5rem',
};

const inputContainerStyle = {
  position: 'relative',
  width: '100%',
  display: 'inline-block',
};

const otpButtonStyle = {
  position: 'absolute',
  top: '11px',
  right: '10px',
  fontSize: '11px',
  borderRadius: '10px',
  background: '#195D48',
  color: '#fff',
  fontWeight: '600',
  padding: '10px',
  lineHeight: '0',
  border: 'none',
  boxShadow: 'none',
};

export default function LoginRegistrationForm() {
  const [activeTab, setActiveTab] = useState('registration');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ ...formStyle }} className="login-registration-form registration-login-main">
      <div className="tab-section">
        <div className="d-flex justify-content-center mt-3">
          <ul className="nav nav-tabs" id="authTabs" role="tablist">
            <li className="nav-item" role="presentation" style={navItemStyle}>
              <Link
                style={{ ...navLinkStyle, ...(activeTab === 'registration' ? activeTabStyle : {}) }}
                id="registration-tab"
                data-bs-toggle="tab"
                href="#registrationForm"
                role="tab"
                aria-controls="registrationForm"
                aria-selected={activeTab === 'registration' ? 'true' : 'false'}
                onClick={() => handleTabChange('registration')}
              >
                Register
              </Link>
            </li>
            <li className="nav-item" role="presentation" style={navItemStyle}>
              <Link
                style={{ ...navLinkStyle, ...(activeTab === 'login' ? activeTabStyle : {}) }}
                id="login-tab"
                data-bs-toggle="tab"
                href="#loginForm"
                role="tab"
                aria-controls="loginForm"
                aria-selected={activeTab === 'login' ? 'true' : 'false'}
                onClick={() => handleTabChange('login')}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {activeTab === 'registration' && (
          <div style={formStyle} className="form-body mt-4">
            <input style={inputStyle} className="account__login--input" placeholder="Username" type="text" />
            <input style={inputStyle} className="account__login--input" placeholder="Email Address" type="text" />
            <input style={inputStyle} className="account__login--input" placeholder="Password" type="password" />
            <div style={inputContainerStyle}>
              <input style={inputStyle} className="account__login--input" placeholder="Mobile Number" type="number" />
              <button style={otpButtonStyle} className="get-otp-button">Get OTP</button>
            </div>
            <input style={inputStyle} className="account__login--input" placeholder="OTP" type="number" />
            <div style={inputContainerStyle} className="minicart__button d-flex justify-content-center mt-3">
              <Link
                style={{ fontWeight: '400', fontSize: '20px', backgroundColor: '#195D48', color: '#fff' }}
                className="primary__btn minicart__button--link my-2"
              >
                Register
              </Link>
            </div>

            <p className="text-center my-3">
              You Have an account? Login now
            </p>
          </div>
        )}

        {activeTab === 'login' && (
          <div style={formStyle} className="form-body mt-4">
            <input style={inputStyle} className="account__login--input" placeholder="Mobile Number" type="text" />
            <input style={inputStyle} className="account__login--input" placeholder="OTP" type="password" />
            <div style={inputContainerStyle} className="minicart__button d-flex justify-content-center mt-3">
              <Link
                style={{ fontWeight: '400', fontSize: '20px', backgroundColor: '#195D48', color: '#fff' }}
                className="primary__btn minicart__button--link my-2"
              >
                Login
              </Link>
            </div>
            <p className="text-center my-2">
              You don't have an account? Register now
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
