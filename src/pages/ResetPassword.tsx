import { useState } from 'react';

import styles from '../styles/login.module.scss';

import FormContainer from '../components/general/FormContainer';
import InputContainer from '../components/general/InputContainer';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [verificationCode, setVerificationCode] = useState<any>();

  const onEnterVerificationCode = (e: any) => {
    let input = e.target.value;

    // Remove non-numeric characters
    input = input.replace(/\D/g, '');

    if (input.length > 6) {
      input = input.slice(0, 6);
    }

    setVerificationCode(input);
  };

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
          <div className={styles['form--input']}>
            <input
              placeholder='Verification Code'
              type='number'
              inputMode='numeric'
              onChange={onEnterVerificationCode}
              value={verificationCode}
            />
          </div>
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

        <Link to={'/login'}>
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
        </Link>
      </form>
    </FormContainer>
  );
}

export default ResetPassword;
