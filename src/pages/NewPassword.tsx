import styles from '../styles/login.module.scss';

import FormContainer from '../components/general/FormContainer';

import ShowPassword from '../images/check password.png';
import { Link } from 'react-router-dom';

function NewPassword() {
  return (
    <FormContainer height='44.8rem'>
      <form>
        <h3
          style={{
            marginBottom: '1.2rem',
          }}
        >
          New Password
        </h3>
        <p
          style={{
            fontSize: '1.2rem',
            width: '70%',
            margin: 'auto',
            lineHeight: '1.8rem',
            marginBottom: '2.4rem',
          }}
        >
          Set the password for your account so you can login and access all the
          features.
        </p>

        <div
          className={styles['form--input']}
          style={{
            marginBottom: '4.8rem',
          }}
        >
          <input placeholder='New Password' type='password' />
          <img
            src={ShowPassword}
            alt='icon'
            className={styles['password--icon']}
          />
        </div>

        <div
          className={styles['form--input']}
          style={{
            marginBottom: '4.8rem',
          }}
        >
          <input placeholder='Confirm Password' type='password' />
          <img
            src={ShowPassword}
            alt='icon'
            className={styles['password--icon']}
          />
        </div>

        <Link to={'/home'}>
          <button className={styles['btn']}>
            <p
              style={{
                fontSize: '1.7rem',
                color: '#032130',
                fontWeight: 700,
              }}
            >
              Continue
            </p>
          </button>
        </Link>
      </form>
    </FormContainer>
  );
}

export default NewPassword;
