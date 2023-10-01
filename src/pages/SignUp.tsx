import { useRef, useState } from 'react';

import FormContainer from '../components/general/FormContainer';
import InputContainer from '../components/general/InputContainer';

import styles from '../styles/login.module.scss';

import NigeriaFlag from '../images/1280px-Flag_of_Nigeria 2.png';
import ArrowDown from '../images/arrow down.png';
import ShowPassword from '../images/check password.png';
import Spinner from '../images/loading.png';

import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { object, string, ref } from 'yup';
import { Formik, Form, Field } from 'formik';

type FormMessage = { message: string; ok: boolean; showForm: boolean };

function SignUp() {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const [formMessage, setFormMessage] = useState<FormMessage>({
    message: '',
    ok: false,
    showForm: false,
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showSpinner, setShowSpinner] = useState(false);

  const userSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    phone: string()
      .required('Phone number is required')
      .min(10, 'Phone number must contains numbers at least 10 digits long')
      .max(15, 'Phone number must be no more than 15 digits long')
      .matches(
        /^\+234[789][01]\d{8}$/,
        'Phone number must be a valid NGN phone number starting with +234'
      ),
    email: string().required('Email is required').email(),
    password: string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol'
      ),
    confirmPassword: string().oneOf([ref('password')], 'Passwords must match'),
  });

  const submitFormHandler = async (values: any) => {
    try {
      setShowSpinner(true);
      const formData = {
        email: values.email,
        password: values.password,
      };
      const response = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const userCredentials = response.user;
      if (userCredentials) {
        const token = await userCredentials.getIdToken();
        localStorage.setItem('token', token);

        setShowSpinner(false);
        setFormMessage({
          message: 'User successfully created',
          showForm: true,
          ok: true,
        });

        setTimeout(() => {
          navigate('/home');
        }, 2000);
      }
    } catch (err: any) {
      setShowSpinner(false);
      const error = err.message;

      setFormMessage({
        message: error,
        showForm: true,
        ok: false,
      });
    }
  };

  return (
    <FormContainer>
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
      <h3
        style={{
          marginBottom: '2.4rem',
        }}
      >
        Sign Up
      </h3>
      <Formik
        onSubmit={submitFormHandler}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          lastName: '',
          firstName: '',
          phone: '',
        }}
        validationSchema={userSchema}
      >
        {({ errors, touched }: any) => (
          <Form className={styles['sign--up__container']}>
            <Field
              placeholder='First Name'
              type='text'
              name='firstName'
              className={
                errors.firstName && touched.firstName
                  ? styles['input--error']
                  : ''
              }
            />
            <Field
              placeholder='Last Name'
              type='text'
              name='lastName'
              className={
                errors.lastName && touched.lastName
                  ? styles['input--error']
                  : ''
              }
            />
            <div
              className={`${styles['form--input']}  ${styles['phone--input']}`}
              style={{
                marginBottom: '0rem',
              }}
            >
              <div className={styles['country--options']}>
                <img src={NigeriaFlag} alt='flag icon' />
                <img src={ArrowDown} alt='Arrow icon' />
              </div>

              <Field
                placeholder='Phone'
                name='phone'
                style={{
                  marginBottom: '0rem',
                }}
              />
            </div>
            {errors.phone && touched.phone ? (
              <p
                style={{
                  color: 'red',
                  fontSize: '1.4rem',
                  marginTop: '0.4rem',
                }}
              >
                {errors.phone}
              </p>
            ) : (
              ''
            )}

            <Field
              placeholder='Email'
              type='email'
              style={{
                marginTop: '0.8rem',
                marginBottom: errors.email && touched.email ? '0rem' : '0.8rem',
              }}
              name='email'
            />
            {errors.email && touched.email ? (
              <p
                style={{
                  color: 'red',
                  fontSize: '1.4rem',
                  marginBottom: '0.8rem',
                  marginTop: '0.4rem',
                }}
              >
                {errors.email}
              </p>
            ) : (
              ''
            )}
            {/* <InputContainer
          placeholder='Password'
          type='password'
          curVal={passwordRef}
        /> */}
            <div className={styles['form--input']}>
              <Field
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                name='password'
                style={{
                  marginBottom:
                    errors.password && touched.password ? '0rem' : '0.8rem',
                }}
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
            {errors.password && touched.password ? (
              <p
                style={{
                  color: 'red',
                  fontSize: '1.4rem',
                  marginBottom: '0.8rem',
                  marginTop: '0.4rem',
                }}
              >
                {errors.password}
              </p>
            ) : (
              ''
            )}

            <div className={styles['form--input']}>
              <Field
                placeholder='Confirm Password'
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                style={{
                  marginBottom:
                    errors.confirmPassword && touched.confirmPassword
                      ? '0rem'
                      : '0.8rem',
                }}
              />

              <img
                src={ShowPassword}
                alt='icon'
                className={styles['password--icon']}
                style={{ top: '1.5rem' }}
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword ? (
              <p
                style={{
                  color: 'red',
                  fontSize: '1.4rem',
                  marginBottom: '0.8rem',
                  marginTop: '0.4rem',
                }}
              >
                {errors.confirmPassword}
              </p>
            ) : (
              ''
            )}

            <InputContainer
              placeholder='Referral Code (Optional)'
              type='text'
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem',
                textAlign: 'left',
                position: 'relative',
                marginBottom: '1.2rem',
              }}
            >
              <div className={styles['checkbox--container']}>
                <input
                  type='checkbox'
                  style={{
                    backgroundColor: 'blue',
                    color: 'red',
                  }}
                />
                <span className={styles['checkmark']}></span>
              </div>
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '14.32px',
                }}
              >
                By creating your account you agree with to our Terms and
                Conditions.
              </p>
            </div>

            <button className={styles['btn']} type='submit'>
              {!showSpinner ? (
                <p
                  style={{
                    fontSize: '1.7rem',
                    color: '#032130',
                    fontWeight: 700,
                  }}
                >
                  Continue
                </p>
              ) : (
                <img
                  src={Spinner}
                  alt='icon'
                  className={styles['loading--spinner']}
                />
              )}
            </button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default SignUp;
