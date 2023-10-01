import styles from '../styles/login.module.scss';

import Logo from '../images/logo.png';
import LoginOption from '../components/LoginOption';

function LoginOptions() {
  return (
    <main className={styles['form--container']}>
      <img
        src={Logo}
        alt='logo'
        style={{
          display: 'flex',
          margin: 'auto',
          marginBottom: '8rem',
          marginTop: '2.4rem',
        }}
      />
      <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'space-between',
        //   width: '55%',
        //   margin: 'auto',
        // }}

        className={styles['login--options__container']}
      >
        <LoginOption
          title='Login to Bank Account'
          description='Enter the email or phone number associated with your account to reset
          your password'
          btnLink='/bank-login'
        />
        <LoginOption
          title='Login to QAPP'
          description='Enter the email or phone number associated 
with your account to reset your password'
          btnLink='/login'
        />
      </div>
    </main>
  );
}

export default LoginOptions;
