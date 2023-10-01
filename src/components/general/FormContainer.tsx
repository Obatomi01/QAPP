import styles from '../../styles/login.module.scss';

import Logo from '../../images/logo.png';

type FormProps = {
  height?: string;
  children: any;
};

function FormContainer({ children, height }: FormProps) {
  return (
    <main className={styles['form--container']}>
      <img
        src={Logo}
        alt='logo'
        style={{
          display: 'flex',
          margin: 'auto',
          marginBottom: '3.2rem',
        }}
      />
      <div
        className={styles['login--form']}
        style={{
          height: height,
          // paddingBlock: '4.8rem',
        }}
      >
        {children}
      </div>
    </main>
  );
}

export default FormContainer;
