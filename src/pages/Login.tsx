import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import styles from '../styles/login.module.scss';

import ArrowDown from '../images/arrow down.png';
import ShowPassword from '../images/check password.png';
import Logo from '../images/logo.png';
import FormContainer from '../components/general/FormContainer';
import InputContainer from '../components/general/InputContainer';
import { Link } from 'react-router-dom';
import Spinner from '../images/loading.png';

import GermanyIcon from '../images/germany.png';
import NigeriaFlag from '../images/nigeria.png';

import { object, string } from 'yup';
import { Formik, Form, Field } from 'formik';
import CountryOptions from '../components/CountryOptions';

type FormMessage = { message: string; ok: boolean; showForm: boolean };

function Login() {
  const navigate = useNavigate();

  const emailRef = useRef<any>();
  const phoneRef = useRef<any>();
  const [formMessage, setFormMessage] = useState<FormMessage>({
    message: '',
    ok: false,
    showForm: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<String>('email');

  const [showSpinner, setShowSpinner] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(NigeriaFlag);

  const [showCountryOptions, setShowCountryOptions] = useState(false);

  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState<any>();
  const [enteredEmail, setEnteredEmail] = useState<any>();

  const userSchema = object({
    email: string().required('Email is required').email(),
    password: string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol'
      ),
    phone: string()
      .required('Phone number is required')
      .min(10, 'Phone number must contains numbers at least 10 digits long')
      .max(15, 'Phone number must be no more than 15 digits long')
      .matches(/^0[789][01]\d{8}$/, 'Invalid phone number format'),
  });

  const onPhoneChangeHandler = (
    fieldName: string,
    value: any,
    formikProps: any
  ) => {
    // Remove non-numeric characters
    let input = value.replace(/\D/g, '');

    // Limit to a specific number of digits (e.g., 5 digits)
    if (input.length > 11) {
      input = input.slice(0, 11);
    }

    formikProps.setFieldValue(fieldName, input);
  };

  const onSubmitFormHandler = async (values: any) => {
    if (loginMethod === 'phone') {
      navigate('/home');
    }

    try {
      setShowSpinner(true);
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const userCredentials = response.user;
      if (response.user) {
        setShowSpinner(false);

        const token = await userCredentials.getIdToken();
        localStorage.setItem('token', token);

        setFormMessage({
          message: 'User successfully found',
          showForm: true,
          ok: true,
        });

        setTimeout(() => {
          navigate('/home');
        }, 2000);
      }
    } catch (err) {
      if (err) {
        setShowSpinner(false);
        setFormMessage({
          message: 'Incorrect email or password',
          showForm: true,
          ok: false,
        });
      }
    }
  };

  return (
    <FormContainer height='46.8rem'>
      {formMessage.showForm && (
        <p
          style={{
            color: `${formMessage.ok ? '#90EE90' : 'red'} `,
            fontSize: '1.8rem',
          }}
        >
          {formMessage.message}
        </p>
      )}
      <h3>Login to QAPP</h3>
      <Formik
        initialValues={{
          email: '',
          password: '',
          phone: '',
        }}
        validationSchema={userSchema}
        onSubmit={onSubmitFormHandler}
      >
        {({ errors, touched, ...props }: any) => (
          <Form
            style={{
              textAlign: 'start',
            }}
          >
            <div className={styles['details--type__container']}>
              <span
                className={`${styles['phone--number__container']} ${
                  loginMethod === 'phone' ? styles['login--active__method'] : ''
                }`}
                onClick={() => setLoginMethod('phone')}
                style={{
                  textAlign: 'center',
                }}
              >
                <p>Phone number</p>
              </span>

              <span
                onClick={() => setLoginMethod('email')}
                className={`${styles['email--container']} ${
                  loginMethod === 'email' ? styles['login--active__method'] : ''
                }`}
                style={{
                  textAlign: 'center',
                }}
              >
                <p>Email</p>
              </span>
            </div>

            {/* <div className={`${styles['form--input']}  ${styles['phone--input']}`}> */}
            <div
              className={`${styles['form--input']} ${
                loginMethod === 'phone' ? styles['phone--input'] : ''
              }`}
              style={{
                marginBottom:
                  errors[`${loginMethod === 'phone' ? 'phone' : 'email'}`] &&
                  touched[`${loginMethod === 'phone' ? 'phone' : 'email'}`]
                    ? '0rem'
                    : '2.4rem',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
                alignItems: 'flex-start',
              }}
            >
              {loginMethod === 'phone' ? (
                <div className={styles['country--options']}>
                  <div
                    onClick={() => setShowCountryOptions(!showCountryOptions)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                    }}
                  >
                    <img
                      src={selectedCountry}
                      alt='flag icon'
                      className={styles['selected--country']}
                    />
                    <img src={ArrowDown} alt='Arrow icon' />
                  </div>

                  <div
                    className={`${
                      showCountryOptions
                        ? styles['enlarged--bank__options']
                        : styles['collapsed--bank__options']
                    } ${styles['country--options__dropdown']}`}
                  >
                    <CountryOptions
                      onSelectedCountryHandler={(option: any) => {
                        setSelectedCountry(option);
                      }}
                    />
                  </div>
                </div>
              ) : (
                ''
              )}

              {loginMethod === 'email' ? (
                <Field type='email' placeholder='Email' name='email' />
              ) : (
                <Field
                  type='number'
                  placeholder='Phone'
                  name='phone'
                  inputMode='numeric'
                  onChange={(e: any) =>
                    onPhoneChangeHandler('phone', e.target.value, props)
                  }
                  value={props.values.phone}
                />
              )}
            </div>
            {errors[`${loginMethod === 'phone' ? 'phone' : 'email'}`] &&
            touched[`${loginMethod === 'phone' ? 'phone' : 'email'}`] ? (
              <p
                style={{
                  color: '#e63a17',
                  fontSize: '1.4rem',
                  marginTop: '0.4rem',
                  marginBottom: '1.4rem',
                }}
              >
                {errors[`${loginMethod === 'phone' ? 'phone' : 'email'}`]}
              </p>
            ) : (
              ''
            )}

            <div
              className={styles['form--input']}
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
                alignItems: 'flex-start',
                marginTop: loginMethod === 'email' ? '0rem' : '2.4rem',
              }}
            >
              <div
                style={{
                  width: '100%',
                }}
              >
                <Field
                  placeholder='Password'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                />
                <img
                  src={ShowPassword}
                  alt='icon'
                  className={styles['password--icon']}
                  style={{ top: '1.5rem' }}
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              </div>
            </div>
            {errors.password && touched.password ? (
              <p
                style={{
                  color: '#e63a17',
                  fontSize: '1.4rem',
                  marginTop: '0.4rem',
                }}
              >
                {errors.password}
              </p>
            ) : (
              ''
            )}

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

            <button className={styles['btn']} type='submit'>
              {!showSpinner ? (
                <p
                  style={{
                    fontSize: '1.7rem',
                    color: '#032130',
                    fontWeight: 700,
                  }}
                >
                  Sign In
                </p>
              ) : (
                <img
                  src={Spinner}
                  alt='icon'
                  className={styles['loading--spinner']}
                />
              )}
            </button>

            <p
              style={{
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '2.4rem',
                textAlign: 'center',
              }}
            >
              Don't have an account?{' '}
              <Link to={'/signup'}>
                <span
                  style={{
                    color: ' #fc7620',
                  }}
                >
                  {' '}
                  Sign Up
                </span>
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default Login;
