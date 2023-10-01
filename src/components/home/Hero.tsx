import styles from '../../styles/home/home.module.scss';
import Logo from '../../images/logo.png';
import Hand from '../../images/hand 1.png';
import LPLogo from '../../images/LP-Network-Plastic-Black.png';

function Hero() {
  return (
    <section className={styles['hero--container']}>
      <div className={styles['hero--description']}>
        <img src={Logo} alt="company's logo" />
        <h1>Your Multiple Service APP</h1>
        <h3>For a seamless universal banking and business experience.</h3>
      </div>

      <div className={styles['hero--image__container']}>
        <img src={Hand} alt='Hero' className={styles['hero--image']} />
        <img src={LPLogo} alt='Hero' className={styles['lp--logo']} />
      </div>
    </section>
  );
}

export default Hero;
