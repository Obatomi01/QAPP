import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import Nav from '../components/general/Nav';

function AccountPage() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <section
      style={{
        backgroundColor: '#007a82',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Nav />
      <h3
        style={{
          position: 'relative',
          top: '25rem',
          textAlign: 'center',
        }}
      >
        Account page
      </h3>
    </section>
  );
}

export default AccountPage;
