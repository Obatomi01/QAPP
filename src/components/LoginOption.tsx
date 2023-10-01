import styles from '../styles/login.module.scss';

import BXSBank from '../images/bxs_bank.png';
import { Link } from 'react-router-dom';

type LoginOptionProps = {
  title: string;
  description: string;
  btnLink: string;
};

function LoginOption(props: LoginOptionProps) {
  return (
    <section className={styles['login--option__container']}>
      <span>
        <img
          src={BXSBank}
          alt='icon'
          style={{
            backgroundColor: '#235a74',
            padding: '1.2rem',
            borderRadius: '14.64px',
          }}
        />
      </span>

      <div
        style={{
          marginBlock: '3.2rem',
        }}
      >
        <h3
          style={{
            marginBottom: '1.2rem',
          }}
        >
          {props.title}
        </h3>
        <p style={{ fontSize: '1.2rem', width: '85%', margin: 'auto' }}>
          {props.description}
        </p>
      </div>

      <Link to={props.btnLink}>
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
    </section>
  );
}

export default LoginOption;
