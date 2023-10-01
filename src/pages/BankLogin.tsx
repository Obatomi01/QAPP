import FormContainer from '../components/general/FormContainer';
import InputContainer from '../components/general/InputContainer';

import styles from '../styles/login.module.scss';

import ShowPassword from '../images/check password.png';
import ChevronDown from '../images/chevron-down.png';
import { Link } from 'react-router-dom';

function BanklLogin() {
  return (
    <FormContainer height='47.7rem'>
      <form>
        <h3
          style={{
            marginBottom: '4.8rem',
            marginTop: '3.2rem',
          }}
        >
          Login to Bank Account
        </h3>

        <div
          style={{
            marginBottom: '2.4rem',
          }}
          className={styles['form--input']}
        >
          <input type='text' placeholder='Select Bank' />
          <img
            src={ChevronDown}
            alt='icon'
            className={styles['password--icon']}
          />
        </div>

        <div
          style={{
            marginBottom: '2.4rem',
          }}
        >
          <InputContainer type='number' placeholder='Account Number' />
        </div>

        <div
          className={styles['form--input']}
          style={{
            marginBottom: '1.2rem',
          }}
        >
          <input placeholder='New Password' type='password' />
          <img
            src={ShowPassword}
            alt='icon'
            className={styles['password--icon']}
          />
        </div>

        <p
          style={{
            fontSize: '1rem',
            textAlign: 'end',
            marginTop: '1.2rem',
            marginBottom: '3.2rem',
          }}
        >
          Forgot password?
        </p>

        <Link to={'/home'}>
          <button className={styles['btn']}>
            <p
              style={{
                fontSize: '1.7rem',
                color: '#032130',
                fontWeight: 700,
              }}
            >
              Sign In
            </p>
          </button>
        </Link>
      </form>
    </FormContainer>
  );
}

export default BanklLogin;
