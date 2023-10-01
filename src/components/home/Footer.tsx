import styles from '../../styles/home/home.module.scss';

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles['footer--contents']}>
        <h3>Privacy</h3>
        <h3>Terms</h3>
        <h3>FAQ</h3>
        <h3>Contact Us</h3>
      </div>
    </section>
  );
}

export default Footer;
