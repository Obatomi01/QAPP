import { useState } from 'react';

import FormContainer from '../components/general/FormContainer';
import InputContainer from '../components/general/InputContainer';

import styles from '../styles/login.module.scss';

import ShowPasswordIcon from '../images/check password.png';
import ChevronDown from '../images/chevron-down.png';
import { Link } from 'react-router-dom';
import BankOptions from '../components/BankOptions';

function BanklLogin() {
  const [showBankOptions, setShowBankOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const [accountNumber, setAccountNumber] = useState<any>();
  const [showPassword, setShowPassword] = useState(false);

  const handleAccountNumberChange = (e: any) => {
    let input = e.target.value;

    // Remove non-numeric characters
    input = input.replace(/\D/g, '');

    // Limit to a specific number of digits (e.g., 5 digits)
    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    setAccountNumber(input);
  };

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
            position: 'relative',
          }}
        >
          <div className={styles['form--input']}>
            {/* <input type='text' placeholder='Select Bank' /> */}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {selectedOption ? (
                <p
                  style={{
                    fontSize: '1.4rem',
                    textAlign: 'left',
                  }}
                >
                  {selectedOption}
                </p>
              ) : (
                <p
                  style={{
                    color: '#196589',
                    fontSize: '1.3rem',
                    fontWeight: '400',
                  }}
                >
                  Select Bank
                </p>
              )}
            </span>
            <img
              src={ChevronDown}
              alt='icon'
              className={`${styles['chevron--icon']} ${
                showBankOptions
                  ? styles['chevron--down']
                  : styles['chevron--up']
              }`}
              onClick={() => setShowBankOptions(!showBankOptions)}
            />
          </div>

          <div
            className={`${styles['bank--options']} ${
              showBankOptions
                ? styles['enlarged--bank__options']
                : styles['collapsed--bank__options']
            }`}
          >
            <BankOptions
              onChangeOptionHandler={(option: any) => {
                setSelectedOption(option);
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginBottom: '2.4rem',
          }}
          className={styles['form--input']}
        >
          <input
            type='number'
            placeholder='Account Number'
            value={accountNumber}
            inputMode='numeric'
            onChange={handleAccountNumberChange}
          />
        </div>

        <div
          className={styles['form--input']}
          style={{
            marginBottom: '1.2rem',
          }}
        >
          <input
            placeholder='New Password'
            type={showPassword ? 'text' : 'password'}
          />
          <img
            src={ShowPasswordIcon}
            alt='icon'
            className={styles['password--icon']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <Link to={'/reset-password'}>
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
        </Link>

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
