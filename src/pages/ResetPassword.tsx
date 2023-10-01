import styles from '../styles/login.module.scss';

import FormContainer from '../components/general/FormContainer';
import InputContainer from '../components/general/InputContainer';

function ResetPassword() {
  return (
    <FormContainer height='39.6rem'>
      <form
        style={{
          paddingBlock: '3.2rem',
        }}
      >
        <h3>OTP Verification</h3>

        <div
          style={{
            marginBlock: '3.2rem',
          }}
        >
          <p
            style={{
              fontSize: '1.2rem',
              textAlign: 'left',
              marginBottom: '0.8rem',
            }}
          >
            Phone verification code
          </p>
          <InputContainer placeholder='Email' type='string' />
          <p
            style={{
              fontSize: '1.2rem',
              textAlign: 'left',
              marginTop: '0.8rem',
            }}
          >
            Enter the 6 digit code sent to +234070*****8989
          </p>
        </div>

        <button className={styles.btn}>
          <p
            style={{
              color: '#032130',
              fontSize: '1.7rem',
              fontWeight: '700',
            }}
          >
            Continue
          </p>
        </button>
      </form>
    </FormContainer>
  );
}

export default ResetPassword;
