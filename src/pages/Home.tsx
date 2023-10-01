import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import styles from '../styles/home/home.module.scss';

import Hero from '../components/home/Hero';
import DownloadApp from '../components/home/DownloadApp';
import Service from '../components/home/Service';

import Nav from '../components/general/Nav';

import FinancialLogo from '../images/bxs_bank.png';
import MerchantLogo from '../images/dashicons_businessman.png';
import CustomerLogo from '../images/ri_customer-service-fill.png';
import Partnership from '../components/home/Partnership';
import Footer from '../components/home/Footer';

function Home() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <section className={styles['home--container']}>
      <Nav />
      <Hero />
      <DownloadApp />

      <div className={styles['services--container']}>
        <div className={styles['services']}>
          <Service
            serviceTitle='Financial Institutions'
            serviceDescription='This portal connects all the financial institutions across African countries which enables the customers manage all their bank accounts transactions and history in one APP. '
            serviceIcon={FinancialLogo}
          />
          <Service
            serviceTitle='Merchant Services'
            serviceDescription='This portal is for large and small scaled business owners, institutions or organizations to come leverage FREE OF CHARGE on our millions of already existing and active customer data base across African countries.'
            serviceIcon={MerchantLogo}
          />
          <Service
            serviceTitle='Consumer Services'
            serviceDescription='This portal is termed the “super app” to easily explain the quality, variety and super features yet in its easiest way. '
            serviceIcon={CustomerLogo}
          />
        </div>
      </div>

      <Partnership />
      <Footer />
    </section>
  );
}

export default Home;
